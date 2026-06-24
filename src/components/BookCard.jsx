import cover from "../assets/cover.jpg";

export default function BookCard({ book, onSelect }) {
  return (
    <article
      onClick={() => onSelect(book)}
      className="bg-white rounded-xl shadow-book hover:shadow-book-hover transition-all cursor-pointer overflow-hidden hover:-translate-y-1"
    >
      {/* Cover */}
      <div className="aspect-[3/4] bg-sepia-100 overflow-hidden">
        <img
          src={cover}
          alt={book.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sepia-800 line-clamp-2 mb-1">
          {book.title}
        </h3>

        <p className="text-sm text-sepia-600 mb-2">
          {book.authors?.[0]?.name || "Unknown Author"}
        </p>

        <p className="text-xs text-sepia-500">
          {book.download_count.toLocaleString()} downloads
        </p>
      </div>
    </article>
  );
}