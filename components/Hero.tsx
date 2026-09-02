import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden">

      {/* Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/flowers/hero.png')",
        }}
      />

      {/* Soft pink overlay - keeps original image visible */}
      <div className="absolute inset-0 bg-pink-100/25" />

      {/* Subtle readability layer behind text */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fffaf8]/55 via-[#fffaf8]/15 to-transparent" />

      {/* White fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#fffaf8] via-[#fffaf8]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[680px] items-center justify-center px-6 pt-20">

        <div className="mx-auto max-w-4xl text-center">

          {/* Small heading */}
          <div className="mb-6 inline-flex rounded-full border border-white/70 bg-white/70 px-5 py-2 shadow-sm backdrop-blur-sm">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8f5266] sm:text-[11px]">
              Est. 2026
              <span className="mx-2 text-[#d95c83]">•</span>
              Artisan Floristry
            </p>
          </div>

          {/* Main heading */}
          <h1
            className="
              font-serif
              text-5xl
              font-medium
              leading-[0.98]
              tracking-[-0.02em]
              text-[#35252c]
              drop-shadow-[0_2px_8px_rgba(255,255,255,0.7)]
              sm:text-6xl
              md:text-7xl
              lg:text-[82px]
            "
          >
            Fresh Flowers for

            <span className="mt-2 block italic text-[#552b38]">
              Every Moment
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              rounded-2xl
              bg-white/45
              px-5
              py-3
              text-sm
              leading-6
              text-[#45383d]
              shadow-sm
              backdrop-blur-[2px]
              md:text-base
            "
          >
            We believe every bloom tells a story. From intimate gestures to
            grand celebrations, our hand-crafted arrangements bring poetry to
            life.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* Primary button */}
            <Link
              href="/shop"
              className="
                inline-flex
                min-w-[140px]
                items-center
                justify-center
                rounded-full
                bg-[#d95c83]
                px-8
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-white
                shadow-md
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#c4476d]
                hover:shadow-lg
              "
            >
              Shop Now
            </Link>

            {/* Secondary button */}
            <Link
              href="/shop"
              className="
                inline-flex
                min-w-[160px]
                items-center
                justify-center
                rounded-full
                border
                border-white/80
                bg-white/85
                px-8
                py-3.5
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#552b38]
                shadow-sm
                backdrop-blur-sm
                transition
                duration-300
                hover:-translate-y-0.5
                hover:bg-white
                hover:shadow-lg
              "
            >
              View Collection
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}