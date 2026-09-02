const BOOKMARKS_KEY = "flower-bookmarks";

export function getBookmarks(): number[] {
  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem(BOOKMARKS_KEY);

  if (!saved) {
    return [];
  }

  try {
    return JSON.parse(saved);
  } catch {
    return [];
  }
}

export function isBookmarked(flowerId: number): boolean {
  const bookmarks = getBookmarks();

  return bookmarks.includes(flowerId);
}

export function addBookmark(flowerId: number): void {
  const bookmarks = getBookmarks();

  if (!bookmarks.includes(flowerId)) {
    bookmarks.push(flowerId);
  }

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify(bookmarks)
  );

  window.dispatchEvent(new Event("bookmarksChanged"));
}

export function removeBookmark(flowerId: number): void {
  const bookmarks = getBookmarks().filter(
    (id) => id !== flowerId
  );

  localStorage.setItem(
    BOOKMARKS_KEY,
    JSON.stringify(bookmarks)
  );

  window.dispatchEvent(new Event("bookmarksChanged"));
}

export function toggleBookmark(flowerId: number): boolean {
  const bookmarked = isBookmarked(flowerId);

  if (bookmarked) {
    removeBookmark(flowerId);
    return false;
  }

  addBookmark(flowerId);
  return true;
}