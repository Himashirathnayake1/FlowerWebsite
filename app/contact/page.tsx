export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">

      <div className="mx-auto max-w-5xl">

        <div className="text-center">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
            We'd Love To Hear From You
          </p>

          <h1 className="mt-4 font-serif text-5xl text-[#292326]">
            Contact Us
          </h1>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

          {/* Information */}
          <div className="rounded-3xl bg-[#fff0f4] p-8">

            <h2 className="font-serif text-3xl text-[#552b38]">
              Let's Talk
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-600">
              Have a question about an arrangement or need help
              choosing the perfect flowers?
            </p>

            <div className="mt-8 space-y-5 text-sm text-gray-600">

              <p>
                <strong className="text-[#552b38]">
                  Email
                </strong>
                <br />
                hello@petalsandprose.com
              </p>

              <p>
                <strong className="text-[#552b38]">
                  Phone
                </strong>
                <br />
                +94 77 123 4567
              </p>

              <p>
                <strong className="text-[#552b38]">
                  Hours
                </strong>
                <br />
                Monday – Saturday
                <br />
                9:00 AM – 6:00 PM
              </p>

            </div>

          </div>

          {/* Form */}
          <form className="rounded-3xl border border-[#f0dfe3] bg-white p-8">

            <div className="space-y-5">

              <div>
                <label className="mb-2 block text-xs text-gray-600">
                  Your Name
                </label>

                <input
                  type="text"
                  className="w-full rounded-xl border border-[#ead8dd] px-4 py-3 text-sm outline-none transition focus:border-[#d95c83]"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-gray-600">
                  Email
                </label>

                <input
                  type="email"
                  className="w-full rounded-xl border border-[#ead8dd] px-4 py-3 text-sm outline-none transition focus:border-[#d95c83]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs text-gray-600">
                  Message
                </label>

                <textarea
                  rows={5}
                  className="w-full resize-none rounded-xl border border-[#ead8dd] px-4 py-3 text-sm outline-none transition focus:border-[#d95c83]"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-[#d95c83] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition hover:bg-[#c4476d]"
              >
                Send Message
              </button>

            </div>

          </form>

        </div>

      </div>

    </main>
  );
}