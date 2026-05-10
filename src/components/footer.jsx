export default function Footer() {
  return (
    <footer
      className="py-8 px-4 mt-auto"
      style={{ background: "#212121", color: "#bdbdbd" }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">
          Data provided by{" "}
          <a
            href="https://gutendex.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            style={{ color: "#26a69a" }}
          >
            Gutendex API
          </a>
        </p>

        <p className="text-sm" style={{ color: "#757575" }}>
          Books from{" "}
          <a
            href="https://www.gutenberg.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
          >
            Project Gutenberg
          </a>{" "}
          • Public Domain
        </p>
      </div>
    </footer>
  );
}