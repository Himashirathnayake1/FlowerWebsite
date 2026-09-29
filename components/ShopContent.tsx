"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import FlowerCard from "@/components/FlowerCard";
import { getFlowers } from "@/lib/api";
import { Flower } from "@/models/Flower";

const categories = [
  "All Flowers",
  "Roses",
  "Tulips",
  "Sunflowers",
  "Lilies",
  "Bouquets",
];

export default function ShopContent() {
  const searchParams = useSearchParams();

  const urlCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(urlCategory || "All Flowers");
  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getFlowers()
      .then(setFlowers)
      .catch(() => setError(true));
  }, []);

  const filteredFlowers = useMemo(() => {
    if (selectedCategory === "All Flowers") {
      return flowers;
    }

    return flowers.filter(
      (flower) =>
        flower.category?.toLowerCase() ===
        selectedCategory.toLowerCase()
    );
  }, [flowers, selectedCategory]);

  return (
    <>
      {/* Category buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">

        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelectedCategory(category)}
            className={`rounded-full px-5 py-2.5 text-xs transition ${
              selectedCategory === category
                ? "bg-[#d95c83] text-white"
                : "border border-[#e8cbd3] bg-white text-[#552b38] hover:bg-[#fff0f4]"
            }`}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Result count */}
      <div className="mb-6 flex items-center justify-between">

        <p className="text-xs text-gray-500">
          {filteredFlowers.length}{" "}
          {filteredFlowers.length === 1
            ? "flower"
            : "flowers"}
        </p>

        <p className="text-xs uppercase tracking-wider text-[#a65b70]">
          {selectedCategory}
        </p>

      </div>

      {/* Flowers */}
      {error ? (
        <div className="rounded-3xl border border-[#f0dfe3] bg-white px-6 py-20 text-center text-sm text-gray-500">
          We could not load the flowers right now. Please try again shortly.
        </div>
      ) : filteredFlowers.length > 0 ? (

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {filteredFlowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
            />
          ))}

        </div>

      ) : (

        <div className="rounded-3xl border border-[#f0dfe3] bg-white px-6 py-20 text-center">

          <div className="text-4xl">
            🌷
          </div>

          <h2 className="mt-4 font-serif text-2xl text-[#552b38]">
            No flowers found
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            We don&apos;t have flowers in this category yet.
          </p>

        </div>

      )}
    </>
  );
}