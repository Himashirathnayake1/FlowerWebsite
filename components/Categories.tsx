import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Roses",
    description: "Classic & romantic",
    image: "/images/flowers/pink-roses.png",
  },
  {
    name: "Tulips",
    description: "Soft & graceful",
    image: "/images/flowers/pink-tulip.png",
  },
  {
    name: "Sunflowers",
    description: "Bright & cheerful",
    image: "/images/flowers/sunflowers.png",
  },
  {
    name: "Lilies",
    description: "Elegant & timeless",
    image: "/images/flowers/white lilies.png",
  },
  {
    name: "Bouquets",
    description: "Made with love",
    image: "/images/flowers/mixed.png",
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
              href={`/shop?category=${encodeURIComponent(category.name)}`}
              className="group relative h-64 overflow-hidden rounded-2xl border border-[#f0dfe3] transition duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(180,80,110,0.15)]"
            >

              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/40" />

              {/* Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">

                {/* Name */}
                <h3 className="font-serif text-2xl text-white drop-shadow-md">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="mt-1 text-xs text-white/90">
                  {category.description}
                </p>

                {/* Explore */}
                <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  Explore →
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}