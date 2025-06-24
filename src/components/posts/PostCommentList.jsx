import React from "react";

export default function PostCommentList({ comments }) {
  return (
    <div className="space-y-4 divide-y divide-lighterDark pl-2 lg:pl-3">
      {comments &&
        comments.map((comment, i) => (
          <div className="flex items-center gap-3 pt-4" key={comment.id + i}>
            <picture className="max-w-6 max-h-6 rounded-full overflow-hidden">
              <img
                className=""
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                  comment?.author?.avatar
                }`}
                alt="avatar"
              />
            </picture>
            <div>
              <div className="flex gap-1 text-xs lg:text-sm">
                <span>{comment?.author?.name}: </span>
                <span>{comment.comment}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
