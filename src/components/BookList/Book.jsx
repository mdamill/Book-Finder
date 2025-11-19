import { Link } from "react-router-dom";
<<<<<<< HEAD
import missingBook from "../../assets/images/missingbook.jpg"; // ✅ import local fallback image

// Book card component
const Book = ({ id, author, cover_id, first_publish_year, title }) => {
  // ✅ Use local fallback image if no cover_id
  const coverImg = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : missingBook;

  return (
    <Link
      to={`/book/${id}`}
      className="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition"
    >
=======

// Book card component
const Book = ({ id, author, cover_id, first_publish_year, title }) => {
  // Build cover image URL or use fallback
  const coverImg = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <Link to={`/book/${id}`} className="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition">
>>>>>>> e64003b7f24821a23b9616b039b3ccf8529cea6e
      <img
        src={coverImg}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
<<<<<<< HEAD
        <p className="text-sm text-gray-600">
          {author ? author.join(", ") : "Unknown Author"}
        </p>
        <p className="text-sm text-gray-500">
          First published: {first_publish_year || "N/A"}
        </p>
=======
        <p className="text-sm text-gray-600">{author ? author.join(", ") : "Unknown Author"}</p>
        <p className="text-sm text-gray-500">First published: {first_publish_year || "N/A"}</p>
>>>>>>> e64003b7f24821a23b9616b039b3ccf8529cea6e
      </div>
    </Link>
  );
};

export default Book;
