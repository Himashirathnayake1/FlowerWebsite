import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute left-0 top-0 z-50 w-full border-b border-white/30 bg-white/70 backdrop-blur-md">

      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="group">

          <h1 className="font-serif text-2xl italic tracking-tight text-[#a72f55]">
            Petals & Prose
          </h1>

        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-9 md:flex">

          <Link
            href="/"
            className="relative text-[11px] font-medium uppercase tracking-wide text-[#b33e62] after:absolute after:-bottom-3 after:left-0 after:h-[1px] after:w-full after:bg-[#d95c83]"
          >
            Home
          </Link>

          <Link
            href="/shop"
            className="text-[11px] font-medium uppercase tracking-wide text-gray-700 transition hover:text-[#c4476d]"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-[11px] font-medium uppercase tracking-wide text-gray-700 transition hover:text-[#c4476d]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-[11px] font-medium uppercase tracking-wide text-gray-700 transition hover:text-[#c4476d]"
          >
            Contact
          </Link>

        </nav>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Bookmarks */}
          <Link
            href="/bookmarks"
            className="flex items-center gap-1 text-gray-700 transition hover:text-[#c4476d]"
            aria-label="Bookmarks"
          >
            <span className="text-xl">
              ♡
            </span>

            <span className="hidden text-[10px] font-medium uppercase tracking-wide sm:inline">
              Saved
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="flex items-center gap-2 text-gray-700 transition hover:text-[#c4476d]"
          >
            <span className="text-[10px] font-medium uppercase tracking-wide">
              0 Cart
            </span>

            <span className="text-lg">
              🛒
            </span>
          </Link>

        </div>

      </div>

    </header>
  );
}