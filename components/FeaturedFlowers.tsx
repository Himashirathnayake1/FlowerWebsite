import Link from "next/link";
import { flowers } from "@/data/flowers";
import FlowerCard from "./FlowerCard";

export default function FeaturedFlowers() {
  const featuredFlowers = flowers.slice(0, 4);

  return (
    <section className="bg-[#fffaf8] px-6 py-20 md:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12 text-center">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
            Our Collection
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#e9a5b9]" />

            <span className="text-sm text-[#d95c83]">
              ♥
            </span>

            <span className="h-px w-12 bg-[#e9a5b9]" />

          </div>

          <h2 className="mt-4 font-serif text-4xl text-[#292326] md:text-5xl">
            Handpicked Just For You
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            Explore our most loved floral arrangements, thoughtfully designed
            for every occasion and emotion.
          </p>

        </div>

        {/* Flower cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {featuredFlowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
            />
          ))}

        </div>

        {/* View all */}
        <div className="mt-12 text-center">

          <Link
            href="/shop"
            className="inline-block border-b border-[#d95c83] pb-1 text-xs font-medium uppercase tracking-widest text-[#b33e62] transition hover:text-[#d95c83]"
          >
            View All Flowers →
          </Link>

        </div>

      </div>

    </section>
  );
}