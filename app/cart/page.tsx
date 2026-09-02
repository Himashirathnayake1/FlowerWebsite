export default function CartPage() {
  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">

      <div className="mx-auto max-w-5xl text-center">

        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
          Your Selection
        </p>

        <h1 className="mt-4 font-serif text-5xl text-[#292326]">
          Shopping Cart
        </h1>

        <div className="mt-12 rounded-3xl border border-[#f0dfe3] bg-white px-6 py-16">

          <div className="text-5xl">
            🛒
          </div>

          <h2 className="mt-5 font-serif text-2xl text-[#552b38]">
            Your cart is empty
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Beautiful flowers are waiting for you.
          </p>

        </div>

      </div>

    </main>
  );
}