export default function Controls({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  onApply,
}) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <section
        id="controls"
        className="bg-white rounded-xl shadow-book p-6 mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Search Input */}
          <div className="lg:col-span-2">
            <label
              htmlFor="search-input"
              className="block text-sm font-medium text-sepia-700 mb-2"
            >
              Search by title or author
            </label>

            <div className="relative">
              <input
                type="text"
                id="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g., Pride and Prejudice, Jane Austen..."
                className="w-full px-4 py-3 pl-11 border border-sepia-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-white placeholder-sepia-400"
              />

              <svg
                className="absolute left-3.5 top-3.5 h-5 w-5 text-sepia-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Language Filter */}
          <div>
            <label
              htmlFor="language-filter"
              className="block text-sm font-medium text-sepia-700 mb-2"
            >
              Language
            </label>

            <select
              id="language-filter"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-sepia-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-paper text-sepia-800 cursor-pointer"
            >
              <option value="">All Languages</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="fa">Persian</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div>
            <label
              htmlFor="sort-select"
              className="block text-sm font-medium text-sepia-700 mb-2"
            >
              Sort by
            </label>

            <select
              id="sort-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="w-full px-4 py-3 border border-sepia-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all bg-paper text-sepia-800 cursor-pointer"
            >
              <option value="downloads">Most Downloaded</option>
              <option value="title">Title A–Z</option>
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={onApply}
            className="px-4 py-2 text-sepia-600 hover:text-sepia-800 hover:bg-sepia-100 rounded-lg transition-all flex items-center gap-2 font-medium"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>

            Clear Filters
          </button>
        </div>
      </section>
    </main>
  );
}

