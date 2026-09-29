"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import BookmarkNav from "./BookmarkNav";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* Desktop / Mobile Navbar */}
      <header className="fixed left-0 top-0 z-[100] w-full border-b border-[#ead8dd]/70 bg-[#fffaf8]/95 shadow-sm backdrop-blur-md">

        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5 md:px-8 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="relative flex h-30 w-[155px] items-center"
          >
            <Image
              src="/images/logo rem.png"
              alt="Promise"
              fill
              priority
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex lg:gap-9">

            <Link
              href="/"
              className="nav-link"
            >
              Home
            </Link>

            <Link
              href="/shop"
              className="nav-link"
            >
              Shop
            </Link>

            <Link
              href="/about"
              className="nav-link"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="nav-link"
            >
              Contact
            </Link>

          </nav>

          {/* Desktop Right */}
          <div className="hidden items-center gap-5 md:flex">

            <BookmarkNav />

            <Link href="/auth" className="text-[10px] font-medium uppercase tracking-wider text-gray-700 transition hover:text-[#c4476d]">Account</Link>

            <Link
              href="/cart"
              className="flex items-center gap-2 text-gray-700 transition hover:text-[#c4476d]"
            >
              <span className="text-[10px] font-medium uppercase tracking-wider">
                Cart
              </span>

              <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#f5d5df] px-1 text-[9px] text-[#8f3452]">
                0
              </span>
            </Link>

          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-4 md:hidden">

            <BookmarkNav />

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-[#ead8dd] bg-white"
            >
              <span
                className={`h-[1.5px] w-5 bg-[#552b38] transition duration-300 ${
                  menuOpen
                    ? "translate-y-[4px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-[1.5px] w-5 bg-[#552b38] transition duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-[1.5px] w-5 bg-[#552b38] transition duration-300 ${
                  menuOpen
                    ? "-translate-y-[4px] -rotate-45"
                    : ""
                }`}
              />
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-[#ead8dd] bg-[#fffaf8] transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >

          <nav className="mx-auto max-w-7xl px-6 py-5">

            <div className="flex flex-col">

              <Link
                href="/"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Home
              </Link>

              <Link
                href="/shop"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Shop
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Contact
              </Link>

              <Link
                href="/cart"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Cart
              </Link>

              <Link
                href="/bookmarks"
                onClick={closeMenu}
                className="mobile-nav-link"
              >
                Saved Flowers
              </Link>

            </div>

          </nav>

        </div>

      </header>
    </>
  );
}