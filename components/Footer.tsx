export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-12 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>

          <div className="flex items-center gap-2">

            <span className="text-3xl">
              🌸
            </span>

            <div>
              <h2 className="text-xl font-bold">
                Blossom
              </h2>

              <p className="text-xs tracking-widest text-pink-400">
                FLOWER SHOP
              </p>
            </div>

          </div>

          <p className="mt-5 text-sm leading-6 text-gray-400">
            Beautiful flowers for beautiful moments.
            We deliver fresh flowers with love.
          </p>

        </div>

        {/* Shop */}
        <div>

          <h3 className="font-semibold">
            Shop
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-400">

            <li>Roses</li>
            <li>Tulips</li>
            <li>Sunflowers</li>
            <li>Mixed Bouquets</li>

          </ul>

        </div>

        {/* Company */}
        <div>

          <h3 className="font-semibold">
            Company
          </h3>

          <ul className="mt-4 space-y-3 text-sm text-gray-400">

            <li>About Us</li>
            <li>Contact</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="font-semibold">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-400">

            <p>📍 Colombo, Sri Lanka</p>
            <p>📞 +94 77 123 4567</p>
            <p>✉️ hello@blossom.lk</p>

          </div>

        </div>

      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2026 Blossom Flower Shop. All rights reserved.
      </div>

    </footer>
  );
}