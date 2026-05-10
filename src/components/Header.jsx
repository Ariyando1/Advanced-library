export default function Header() {
  return (
    <header
      className="bg-linear-to-r from-teal-700 to-teal-600 text-white py-8 px-4 shadow-lg"
      style={{ background: "linear-gradient(135deg, #00695c, #009688)" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-3 tracking-tight">
          📚 Gutendex Books Explorer
        </h1>

        <p
          className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto"
          style={{ color: "#b2dfdb" }}
        >
          Discover thousands of free public domain books from Project Gutenberg
        </p>
      </div>
    </header>
  );
}