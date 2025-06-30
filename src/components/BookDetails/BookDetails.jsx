import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./BookDetails.css";
import { getBooks } from "../../services/api";

const BookDetails = () => {
  const location = useLocation();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [favorites, setFavorites] = useState([]);

  let displayedBooks = 0;

  const bookId = +location.pathname.slice(6);

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

  const book = books.find((el) => {
    return el.id === +location.pathname.slice(6);
  });

  const favoriteList = JSON.parse(localStorage.getItem("favorites")) || [];
  const addFavorite = () => {
    if (!favoriteList.includes(bookId)) {
      favoriteList.push(bookId);
      localStorage.setItem("favorites", JSON.stringify(favoriteList));
      setFavorites(favoriteList);
    }
  };

  const removeFavorite = () => {
    const updatedFavorites = favoriteList.filter((book) => book !== bookId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="book-details">
          <div>
            <img src={book.picture_url} alt="book-cover" />
          </div>
          <div>
            <h1>{book.name}</h1>
            <p className="book-year">{book.year}</p>
            <p className="book-price">Price: {book.price}$</p>
            <p className="book-description">Description: {book.description}</p>
            {!favoriteList.includes(bookId) ? (
              <button disabled={!localStorage.getItem("login")} className="add-favorites-btn" onClick={addFavorite}>
                Add to favorites
              </button>
            ) : (
              <button disabled={!localStorage.getItem("login")} className="add-favorites-btn" onClick={removeFavorite}>
                Remove from favorites
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
