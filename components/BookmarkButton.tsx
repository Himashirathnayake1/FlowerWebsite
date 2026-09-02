"use client";

import { useState } from "react";

interface BookmarkButtonProps {
  flowerId: number;
}

export default function BookmarkButton({
  flowerId,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked((current) => !current);
  };

  return (
    <button
      type="button"
      onClick={handleBookmark}
      aria-label={
        bookmarked
          ? "Remove from bookmarks"
          : "Add to bookmarks"
      }
      className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur-sm transition duration-300 ${
        bookmarked
          ? "bg-[#f8d2df] text-[#b52f59]"
          : "bg-white/95 text-[#c4476d] hover:scale-105"
      }`}
    >
      <span
        className={`text-xl transition-transform duration-300 ${
          bookmarked ? "scale-110" : ""
        }`}
      >
        {bookmarked ? "♥" : "♡"}
      </span>
    </button>
  );
}