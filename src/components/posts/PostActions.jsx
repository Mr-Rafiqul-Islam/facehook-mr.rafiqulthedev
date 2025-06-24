import CommentIcon from "../../assets/icons/comment.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";
import LikeFilledIcon from "../../assets/icons/like-filled.svg";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";

export default function PostActions({ post, commentCount }) {
  const { auth } = useAuth();
  const [liked, setLiked] = useState(post?.likes?.includes(auth?.user?.id));
  const { api } = useAxios();

  const handleLike = async () => {
    try {
        const response = await api.patch(
            `${import.meta.env.VITE_SERVER_BASE_URL}/posts/${post.id}/like`
        );

        if (response.status === 200) {
            setLiked(true);
        }
    } catch (error) {
        console.error(error);
        setLiked(false);
    }
};
  const handleComment = (id) => {
    console.log(id);
  };
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      {/* Like Button */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm" onClick={handleLike}>
        <img className="w-6" src={liked ? LikeFilledIcon : LikeIcon} alt="Like" />
        {!liked && <span>Like</span>}
      </button>
      {/* Comment Button */}
      <button
        className="icon-btn space-x-2 px-6 py-3 text-xs lg:px-12 lg:text-sm"
        onClick={() => handleComment(post)}
      >
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({commentCount ?? 0})</span>
      </button>
      {/* Share Button */}
      {/* Like Button */}
      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}
