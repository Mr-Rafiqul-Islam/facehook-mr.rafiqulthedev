import React, { useState } from "react";
import PostCommentList from "./PostCommentList";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

export default function PostComments({ post }) {
  const {
    auth: { user },
  } = useAuth();

  const [comments, setComments] = useState(post?.comments);
  const [comment, setComment] = useState("");
  const { api } = useAxios();

  const addComment = async (event) => {
    const keyCode = event.keyCode;

    if (keyCode === 13) {
      try {
        const response = await api.patch(
          `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/comment`,
          { comment }
        );

        if (response.status === 200) {
          setComments([...response.data.comments]);
          setComment("");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      {/* comment input box */}
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <picture className="overflow-hidden max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]">
          <img
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`}
            alt="avatar"
          />
        </picture>
        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
            name="post"
            id="post"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onKeyDown={(e) => addComment(e)}
            placeholder="What's on your mind?"
          />
        </div>
      </div>
      {/* comment filter button */}
      <div className="mt-4">
        <button className="text-gray-300 max-md:text-sm">All Comment ▾</button>
      </div>
      {/* comments */}
      <PostCommentList comments={comments} />
      {/* comments ends */}
    </div>
  );
}
