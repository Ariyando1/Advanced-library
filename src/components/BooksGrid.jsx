import BookCard from "./BookCard";

export default function BooksGrid({ books, onSelect }) {
  if (!books || books.length === 0) {
    return (
      <p className="text-center text-gray-500 py-10">
        No books found
      </p>
    );
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onSelect={onSelect}
        />
      ))}
    </section>
  );
}