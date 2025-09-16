import { Link } from "react-router-dom";

// Book card component
const Book = ({ id, author, cover_id, first_publish_year, title }) => {
  // Build cover image URL or use fallback
  const coverImg = cover_id
    ? `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";

  return (
    <Link to={`/book/${id}`} className="block bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition">
      <img
        src={coverImg}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{author ? author.join(", ") : "Unknown Author"}</p>
        <p className="text-sm text-gray-500">First published: {first_publish_year || "N/A"}</p>
      </div>
    </Link>
  );
};

export default Book;
