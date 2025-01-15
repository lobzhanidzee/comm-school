import { useEffect, useState } from "react";
import { getBooks } from "../services/api";
import { useLocation } from "react-router-dom";

import BookCard from "../components/BookCard/BookCard";

const Home = () => {
  const location = useLocation();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booksQuantity, setBooksQuantity] = useState(20);
  let displayedBooks = 0;

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

  return (
    <div className="home-page">
      <h1>Books</h1>
      <div className="books--container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          books.map((book) => {
            if (location.search) {
              if (
                displayedBooks <= booksQuantity &&
                book.name.includes(location.search.slice(8))
              ) {
                displayedBooks++;
                return <BookCard book={book} key={book.id} />;
              }
            } else {
              displayedBooks++;
              return displayedBooks < booksQuantity ? (
                <BookCard book={book} key={book.id} />
              ) : (
                ""
              );
            }
          })}
      </div>
      <button
        className="loadmore-btn"
        onClick={() => {
          setBooksQuantity((prev) => prev + 20);
        }}
        style={
          booksQuantity === books.length || displayedBooks < 20
            ? { display: "none" }
            : { display: "block" }
        }
      >
        Load More
      </button>
    </div>
  );
};

export default Home;
