"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getBookmarks } from "@/lib/bookmarks";

export default function BookmarkNav() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCount(getBookmarks().length);
    };

    updateCount();

    window.addEventListener(
      "bookmarksChanged",
      updateCount
    );

    return () => {
      window.removeEventListener(
        "bookmarksChanged",
        updateCount
      );
    };
  }, []);

  return (
    <Link
      href="/bookmarks"
      className="flex items-center gap-1.5 text-gray-700 transition hover:text-[#c4476d]"
      aria-label="Bookmarks"
    >
      <span className="text-xl leading-none">
        {count > 0 ? "♥" : "♡"}
      </span>

      <span className="hidden text-[10px] font-medium uppercase tracking-wider sm:inline">
        Saved
      </span>

      <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f5d5df] px-1 text-[9px] text-[#8f3452]">
        {count}
      </span>
    </Link>
  );
}