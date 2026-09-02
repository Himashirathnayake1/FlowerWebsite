import BookmarksContent from "./BookmarksContent";

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-[#fffaf8] px-6 pb-20 pt-32">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d95c83]">
            Your Collection
          </p>

          <div className="mx-auto mt-4 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#e8b4c2]" />

            <span className="text-sm text-[#d95c83]">
              ♥
            </span>

            <span className="h-px w-12 bg-[#e8b4c2]" />

          </div>

          <h1 className="mt-4 font-serif text-4xl text-[#292326] md:text-5xl">
            Your Bookmarks
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600">
            Keep your favorite flowers close and come back
            to them whenever you're ready.
          </p>

        </div>

        {/* Bookmark content */}
        <BookmarksContent />

      </div>

    </main>
  );
}