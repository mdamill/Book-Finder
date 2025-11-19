import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

// API URL
const URL = "https://openlibrary.org/search.json?title=";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    /*
      "I need a place to store the user's search term."
      "I need a place to store the list of books I get from the API."
      "I need a way to know if the app is currently loading data, so I can show a spinner."
      "I need a result title to tell the user what's happening (e.g., 'No Results Found')."
    */
    const [searchTerm, setSearchTerm] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultTitle, setResultTitle] = useState("");

    // function to fetch books
    const fetchBooks = useCallback(async () => {
        setLoading(true);

        try {
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json(); // ✅ missing await before
            const { docs } = data;

            if (docs) {
                const manageableBooks = docs.slice(0, 15);
                const newBooks = manageableBooks.map((book) => {
                    const {
                        key,
                        author_name,
                        cover_i,
                        edition_count,
                        first_publish_year,
                        title,
                    } = book;

                    return {
                        id: key.replace("/works/", ""),
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title,
                    };
                });

                setBooks(newBooks);

                if (newBooks.length > 0) {
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!");
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [searchTerm]);

    // useEffect
    useEffect(() => {
        if (searchTerm !== "")
            fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider
            value={{
                loading,
                books,
                setSearchTerm,
                resultTitle,
                setResultTitle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

// custom hook for ease of use
export const useGlobalContext = () => useContext(AppContext);

export { AppContext, AppProvider };
