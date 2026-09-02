import { Suspense } from "react";
import ShopContent from "@/components/ShopContent";

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

        <Suspense
          fallback={
            <div className="py-20 text-center text-sm text-gray-500">
              Loading flowers...
            </div>
          }
        >
          <ShopContent />
        </Suspense>

      </div>

    </main>
  );
}