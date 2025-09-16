import Book from "./Book";
import { useGlobalContext } from "../../context/AppContext.jsx";

// BookList component to display multiple books
const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  if (loading) {
  return (
    <div className="text-center text-gray-600 text-xl mt-10">
      Loading books...
    </div>
  );
}

if (!books || books.length === 0) {
  return (
    <div className="text-center text-gray-600 text-xl mt-10">
      {resultTitle || "Search for books above"}
    </div>
  );
}


  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">{resultTitle}</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <Book key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookList;
