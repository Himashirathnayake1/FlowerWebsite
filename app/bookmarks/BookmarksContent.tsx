"use client";

import { useEffect, useState } from "react";

import { flowers } from "@/data/flowers";
import FlowerCard from "@/components/FlowerCard";
import { getBookmarks } from "@/lib/bookmarks";

export default function BookmarksContent() {
  const [bookmarkIds, setBookmarkIds] = useState<number[]>([]);

  const loadBookmarks = () => {
    setBookmarkIds(getBookmarks());
  };

  useEffect(() => {
    loadBookmarks();

    window.addEventListener(
      "bookmarksChanged",
      loadBookmarks
    );

    return () => {
      window.removeEventListener(
        "bookmarksChanged",
        loadBookmarks
      );
    };
  }, []);

  const bookmarkedFlowers = flowers.filter((flower) =>
    bookmarkIds.includes(flower.id)
  );

  return (
    <>
      {bookmarkedFlowers.length === 0 ? (

        /* Empty State */
        <div className="rounded-3xl border border-[#f0dfe3] bg-white px-6 py-20 text-center">

          <div className="text-5xl">
            ♡
          </div>

          <h2 className="mt-5 font-serif text-3xl text-[#552b38]">
            No saved flowers yet
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
            When you find a flower you love, click the heart
            to save it here.
          </p>

        </div>

      ) : (

        /* Flowers */
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {bookmarkedFlowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
            />
          ))}

        </div>

      )}
    </>
  );
}