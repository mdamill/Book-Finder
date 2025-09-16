import { useRef } from "react";
import { HiSearch } from "react-icons/hi";
import { useGlobalContext } from "../../context/AppContext.jsx"; 
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchInput = useRef("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let tempInput = searchInput.current.value.trim();

    // validation with regex (only letters, numbers, or spaces)
    const regex = /^[\w\s]+$/;

    if (!regex.test(tempInput) || tempInput === "") {
      setSearchTerm("");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(tempInput);
    }

    // ✅ must go to /books (not /book)
    navigate("/books");
  };

  return (
    <div className="flex items-center max-w-[680px] mx-auto p-2 bg-white rounded-full shadow-lg">
      <form className="flex-grow w-full" onSubmit={handleSubmit}>
        <div className="flex w-full">
          <input
            type="text"
            placeholder="The Lost World ..."
            className="flex-grow p-2 text-gray-700 font-semibold text-[1.1rem] rounded-full focus:outline-none"
            ref={searchInput}
          />
          <button
            type="submit"
            className="p-2 text-[#8d27ae] rounded-full hover:text-[#c010fa] transition duration-300"
          >
            <HiSearch size={32} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
