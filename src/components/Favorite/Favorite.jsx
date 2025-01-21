import { useEffect, useState } from "react";
import { getBooks } from "../../services/api";
import BookCard from "../BookCard/BookCard";

import "./Favorite.css";

const Favorite = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const favoriteList = localStorage.getItem("favorites");

  useEffect(() => {
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

  if (!favoriteList) {
    return <p>List is empty</p>;
  }

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
