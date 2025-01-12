import { useEffect, useState } from "react";
import { getBooks } from "../services/api";

import BookCard from "../components/BookCard/BookCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="home-page">
      <h1>Books</h1>
      <div className="books--container">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading &&
          !error &&
          books.map((book) => <BookCard book={book} key={book.id} />)}
        <button className="loadmore-btn">Load More</button>
      </div>
    </div>
  );
};

export default Home;
