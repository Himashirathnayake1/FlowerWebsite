import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden">

      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/flowers/hero.png')",
        }}
      />

      {/* Pink overlay */}
      <div className="absolute inset-0 bg-pink-100/30" />

      {/* White fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#fffaf8] via-[#fffaf8]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[680px] items-center justify-center px-6 pt-20">

        <div className="mx-auto max-w-4xl text-center">

          {/* Small heading */}
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-gray-700">
            Est. 1994&nbsp;&nbsp;•&nbsp;&nbsp;Artisan Floristry
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl leading-[0.95] text-[#242126] sm:text-6xl md:text-7xl lg:text-[82px]">

            Fresh Flowers for

            <span className="block italic">
              Every Moment
            </span>

          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-sm leading-6 text-gray-700 md:text-base">
            We believe every bloom tells a story. From intimate gestures to grand
            celebrations, our hand-crafted arrangements bring poetry to life.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Link
              href="/shop"
              className="rounded-full bg-[#f4b8ce] px-8 py-3 text-xs font-medium text-[#522335] transition duration-300 hover:bg-[#e99ab8] hover:shadow-lg"
            >
              Shop Now
            </Link>

            <Link
              href="/shop"
              className="rounded-full bg-white/90 px-8 py-3 text-xs font-medium text-gray-800 shadow-sm transition duration-300 hover:bg-white hover:shadow-lg"
            >
              View Collection
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}