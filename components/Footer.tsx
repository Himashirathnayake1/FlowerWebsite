import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#ead8dd] bg-[#552b38] text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-10">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-1">

            <Link href="/">
              <h2 className="font-serif text-3xl italic text-[#f9dce5]">
                Petals & Prose
              </h2>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#e8ccd4]">
              Beautiful flowers, thoughtfully arranged for
              life's most meaningful moments.
            </p>

          </div>

          {/* Navigation */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#f6dce4]">
              Explore
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                href="/"
                className="footer-link"
              >
                Home
              </Link>

              <Link
                href="/shop"
                className="footer-link"
              >
                Shop
              </Link>

              <Link
                href="/about"
                className="footer-link"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="footer-link"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Customer */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#f6dce4]">
              Customer
            </h3>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                href="/bookmarks"
                className="footer-link"
              >
                Saved Flowers
              </Link>

              <Link
                href="/cart"
                className="footer-link"
              >
                Shopping Cart
              </Link>

              <Link
                href="/contact"
                className="footer-link"
              >
                Delivery Information
              </Link>

              <Link
                href="/contact"
                className="footer-link"
              >
                Help & Support
              </Link>

            </div>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[#f6dce4]">
              Visit Us
            </h3>

            <div className="mt-5 space-y-3 text-sm text-[#e8ccd4]">

              <p>
                Colombo, Sri Lanka
              </p>

              <p>
                hello@petalsandprose.com
              </p>

              <p>
                +94 77 123 4567
              </p>

              <p>
                Mon – Sat · 9AM – 6PM
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-center text-xs text-[#dcbfc8] md:flex-row md:items-center md:justify-between md:px-8 lg:px-10 md:text-left">

          <p>
            © {new Date().getFullYear()} Petals & Prose. All rights reserved.
          </p>

          <div className="flex justify-center gap-5">

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-white"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}