import { flowers } from "@/data/flowers";
import FlowerCard from "@/components/FlowerCard";

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">

      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-12 text-center">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
            Our Flowers
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#e8b4c2]" />

            <span className="text-sm text-[#d95c83]">
              ♥
            </span>

            <span className="h-px w-12 bg-[#e8b4c2]" />
          </div>

          <h1 className="mt-4 font-serif text-4xl text-[#292326] md:text-5xl">
            Shop Our Collection
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600">
            Discover beautiful flowers carefully selected and
            arranged for life's special moments.
          </p>

        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">

          <button className="rounded-full bg-[#d95c83] px-5 py-2 text-xs text-white">
            All Flowers
          </button>

          <button className="rounded-full border border-[#e8cbd3] bg-white px-5 py-2 text-xs text-[#552b38] transition hover:bg-[#fff0f4]">
            Roses
          </button>

          <button className="rounded-full border border-[#e8cbd3] bg-white px-5 py-2 text-xs text-[#552b38] transition hover:bg-[#fff0f4]">
            Tulips
          </button>

          <button className="rounded-full border border-[#e8cbd3] bg-white px-5 py-2 text-xs text-[#552b38] transition hover:bg-[#fff0f4]">
            Sunflowers
          </button>

          <button className="rounded-full border border-[#e8cbd3] bg-white px-5 py-2 text-xs text-[#552b38] transition hover:bg-[#fff0f4]">
            Lilies
          </button>

        </div>

        {/* Flowers */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {flowers.map((flower) => (
            <FlowerCard
              key={flower.id}
              flower={flower}
            />
          ))}

        </div>

      </div>

    </main>
  );
}