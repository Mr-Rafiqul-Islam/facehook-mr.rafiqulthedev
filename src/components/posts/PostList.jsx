import React from "react";
import PostCard from "./PostCard";

export default function PostList({ posts }) {
  return (
    <div>
      {posts?.length > 0 ? (
        <>
          {posts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </>
      ) : (
        <div className="capitalize">there is no post found..!</div>
      )}
    </div>
  );
}
