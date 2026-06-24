import { useState, useEffect } from "react";
import Header from "./components/Header";
import controlsBar from "./components/controlsBar";
import BooksGrid from "./components/BooksGrid";
import { data } from "./data";
import Footer from "./components/footer";
import { Document } from "flexsearch";


const index = new Document({
  document: {
    id: "id",
    index: ["title", "authors:name", "subjects", "bookshelves", "summaries"],
  },
  tokenize: "forward",
});

const resultsData = data?.results || [];
resultsData.forEach((book) => {
  index.add(book);
});

export default function App() {
  const [books] = useState(resultsData);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("downloads");
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchResultsIds, setSearchResultsIds] = useState(null);

  // منطق جست‌وجو
  useEffect(() => {
    if (!search || search.trim() === "") {
      setSearchResultsIds(null);
      return;
    }

    try {
      // استفاده از موتور جست‌وجوی آماده شده در بالا
      const results = index.search(search);

      if (results) {
        const formattedForExercise = results.map((res) => ({
          field: res.field,
          result: res.result,
        }));
        console.log( formattedForExercise);

        const allIds = [...new Set(results.flatMap((res) => res.result || []))];
        setSearchResultsIds(allIds);
      }
    } catch (error) {
      console.error("خطا در هنگام جست‌وجو:", error);
    }
  }, [search]);

  // فیلتر و مرتب‌سازی
  const filteredBooks = books
    .filter((book) => {
      if (searchResultsIds !== null) {
        return searchResultsIds.includes(book.id);
      }
      return true;
    })
    .filter((book) => (category ? book.languages?.includes(category) : true))
    .sort((a, b) => {
      if (sort === "title") {
        return (a.title || "").localeCompare(b.title || "");
      }
      return (b.download_count || 0) - (a.download_count || 0);
    });

  function handleClearFilters() {
    setSearch("");
    setCategory("");
    setSort("downloads");
  }

  return (
    <div>
      <Header />
      <controlsBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        onApply={handleClearFilters}
      />

      <div className="ml-3 mr-3">
        <BooksGrid books={filteredBooks} onSelect={setSelectedBook} />
      </div>

      <Footer />

      {/* مودال نمایش جزئیات کتاب */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-xl w-full max-w-[450px] shadow-2xl">
            <h2 className="font-bold text-xl mb-2 text-gray-800">
              {selectedBook.title}
            </h2>
            <p className="text-emerald-700 font-medium mb-3">
              {selectedBook.authors?.[0]?.name || "نویسنده ناشناس"}
            </p>
            <div className="max-h-[200px] overflow-y-auto mb-6 text-gray-600 text-sm leading-relaxed">
              {selectedBook.summaries?.[0] || "خلاصه‌ای برای این کتاب ثبت نشده است."}
            </div>

            <button
              className="w-full py-2 bg-emerald-700 text-white rounded-lg font-bold hover:bg-emerald-800 transition-colors"
              onClick={() => setSelectedBook(null)}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}