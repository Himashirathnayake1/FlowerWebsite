import Link from "next/link";
import BookmarkNav from "./BookmarkNav";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-[100] w-full border-b border-[#ead8dd]/70 bg-[#fffaf8]/90 shadow-sm backdrop-blur-md">
      
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="shrink-0"
        >
          <h1 className="font-serif text-xl italic tracking-tight text-[#a72f55] md:text-2xl">
            Petals & Prose
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-7 md:flex lg:gap-9">

          <Link
            href="/"
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#b33e62] transition hover:text-[#d95c83]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-[#d95c83]"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-[#d95c83]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-gray-700 transition hover:text-[#d95c83]"
          >
            Contact
          </Link>

        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4 md:gap-6">

          <Link
  href="/bookmarks"
  className="flex items-center gap-1.5 text-gray-700 transition hover:text-[#c4476d]"
  aria-label="Bookmarks"
>
  <span className="text-xl leading-none">
    ♡
  </span>

  <span className="hidden text-[10px] font-medium uppercase tracking-wider sm:inline">
    Saved
  </span>
</Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-1.5 text-gray-700 transition hover:text-[#c4476d]"
            aria-label="Shopping cart"
          >
            <span className="text-[10px] font-medium uppercase tracking-wider">
              Cart
            </span>

            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f5d5df] px-1 text-[9px] text-[#8f3452]">
              0
            </span>
          </Link>

        </div>

      </div>

    </header>
  );
}