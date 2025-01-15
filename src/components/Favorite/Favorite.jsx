import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getBooks } from "../../services/api";
import BookCard from "../BookCard/BookCard";

import "./Favorite.css";

const Favorite = () => {
  const location = useLocation();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booksQuantity, setBooksQuantity] = useState(20);
  let displayedBooks = 0;

  const favoriteList = localStorage.getItem("favorites");

  useEffect(() => {
    displayedBooks = 0;
    const fetchBooks = async () => {
      try {
        const books = await getBooks();

        setLoading(false);
        setBooks(books);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const favoriteListBooks = books.filter((book) =>
    JSON.parse(favoriteList).includes(book.id)
  );

  return (
    <div className="favorite-box">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading &&
        !error &&
        favoriteListBooks.map((book) => <BookCard key={book.id} book={book} />)}
    </div>
  );
};

export default Favorite;
