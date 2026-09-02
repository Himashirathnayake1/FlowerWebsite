export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">

      <div className="mx-auto max-w-4xl text-center">

        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
          Our Story
        </p>

        <div className="mx-auto mt-4 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#e8b4c2]" />

          <span className="text-sm text-[#d95c83]">
            ♥
          </span>

          <span className="h-px w-12 bg-[#e8b4c2]" />
        </div>

        <h1 className="mt-4 font-serif text-5xl text-[#292326]">
          About Petals & Prose
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600">
          We believe flowers have a beautiful way of expressing
          what words sometimes cannot.
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-600">
          Our florists carefully create each arrangement using
          fresh flowers and thoughtful designs, bringing beauty
          and emotion into every bouquet.
        </p>

        <div className="mt-12 rounded-3xl bg-[#fff0f4] px-8 py-12">

          <h2 className="font-serif text-3xl text-[#552b38]">
            Flowers for every moment
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600">
            Birthdays, anniversaries, celebrations, apologies,
            congratulations, or simply a reminder that someone
            is special.
          </p>

        </div>

      </div>

    </main>
  );
}