"use client";

import { useEffect, useState } from "react";
import {
  isBookmarked,
  toggleBookmark,
} from "@/lib/bookmarks";

interface BookmarkButtonProps {
  flowerId: number;
}

export default function BookmarkButton({
  flowerId,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(isBookmarked(flowerId));
  }, [flowerId]);

  const handleBookmark = () => {
    const newStatus = toggleBookmark(flowerId);

    setBookmarked(newStatus);
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
      className={`absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-sm backdrop-blur-sm transition duration-300 ${
        bookmarked
          ? "bg-[#f8d2df] text-[#b52f59]"
          : "bg-white/95 text-[#c4476d] hover:scale-110"
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