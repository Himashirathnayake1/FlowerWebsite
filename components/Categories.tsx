import Link from "next/link";

const categories = [
  {
    name: "Roses",
    description: "Classic & romantic",
    icon: "🌹",
  },
  {
    name: "Tulips",
    description: "Soft & graceful",
    icon: "🌷",
  },
  {
    name: "Sunflowers",
    description: "Bright & cheerful",
    icon: "🌻",
  },
  {
    name: "Lilies",
    description: "Elegant & timeless",
    icon: "🤍",
  },
  {
    name: "Bouquets",
    description: "Made with love",
    icon: "💐",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#fffaf8] px-6 py-20 md:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
            Explore Our Flowers
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#e8b4c2]" />

            <span className="text-sm text-[#d95c83]">
              ♥
            </span>

            <span className="h-px w-12 bg-[#e8b4c2]" />
          </div>

          <h2 className="mt-4 font-serif text-4xl text-[#292326] md:text-5xl">
            Find Something Beautiful
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 md:text-base">
            From timeless roses to cheerful sunflowers, discover
            flowers for every feeling and occasion.
          </p>

        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-5">

          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/shop?category=${category.name}`}
              className="group rounded-2xl border border-[#f0dfe3] bg-white px-4 py-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#e8b0bf] hover:shadow-[0_12px_30px_rgba(180,80,110,0.10)]"
            >

              {/* Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fff0f4] text-3xl transition duration-300 group-hover:scale-110 group-hover:bg-[#fce2ea]">
                {category.icon}
              </div>

              {/* Name */}
              <h3 className="mt-5 font-serif text-xl text-[#552b38]">
                {category.name}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs text-gray-500">
                {category.description}
              </p>

              <p className="mt-4 text-[10px] font-medium uppercase tracking-widest text-[#c4476d] opacity-0 transition group-hover:opacity-100">
                Explore →
              </p>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}