import React from "react";

export default function PostBody({ poster, content }) {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      {/* If Post has Image, Render this block */}
      <div className="flex items-center justify-center overflow-hidden">
        {poster && (
          <img
            className="max-w-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`}
            alt="poster"
          />
        )}
      </div>
      <p className="my-4">{content ?? "No Content Available"}</p>
    </div>
  );
}
