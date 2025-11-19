import Book from "./Book";
import { useGlobalContext } from "../../context/AppContext.jsx";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import Loader from "../Loader/Loader.jsx";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();
  const navigate = useNavigate();

  // 🕒 While fetching books
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 text-xl">
        <Loader />
      </div>
    );
  }

  // 📭 No results after loading
  if (!books || books.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600 text-xl text-center px-4">
        <p className="mb-6">{resultTitle || "No Books Found"}</p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#8d27ae] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-[#a53cd7] transition duration-300"
        >
          Go to Home Page
        </button>
      </div>
    );
  }

  // ✅ Show results
  return (
    <section className="py-10 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Back arrow */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-6 text-[#67c4e9] font-medium hover:text-cyan-400 transition duration-300"
        >
          <HiArrowLeft size={22} />
          Back
        </button>

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
