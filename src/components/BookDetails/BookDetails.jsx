import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Loading from "../Loader/Loader";
import coverImg from "../../assets/images/cover-not-found.jpg";
import { useNavigate, useParams } from "react-router-dom";

// API
const URL = "https://openlibrary.org/works/";

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [book, setBook] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if (data) {
          const { description, title, covers } = data;

          const newBook = {
            title: title || "No title found",
            description:
              typeof description === "string"
                ? description
                : description?.value || "No description available",
            cover_img: covers
              ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
              : coverImg,
          };

          setBook(newBook); // ✅ save book in state
        } else {
          setBook(null);
        }
      } catch (error) {
        console.log(error);
        setBook(null);
      }
      setLoading(false);
    };

    getBookDetails(); // ✅ actually call the function
  }, [id]);

  if (loading) {
<<<<<<< HEAD
    return <Loading />;
=======
    return <Loading />; 
>>>>>>> e64003b7f24821a23b9616b039b3ccf8529cea6e
  }

  return (
    <section className="p-6 min-h-screen bg-gray-50">
<<<<<<< HEAD

      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-6"
=======
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-blue-600 mb-6"
>>>>>>> e64003b7f24821a23b9616b039b3ccf8529cea6e
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      {book ? (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 text-center">
          <img
            src={book.cover_img}
            alt={book.title}
            className="w-full h-auto mb-4 rounded"
          />
          <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
          <p className="text-gray-700">{book.description}</p>
        </div>
      ) : (
        <p className="text-center text-gray-600">Book details not found</p>
      )}
    </section>
  );
}

export default BookDetails;
