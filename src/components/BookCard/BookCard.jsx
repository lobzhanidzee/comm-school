import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book--card">
      <img src={book.picture_url} alt="book cover" />
      <h2>{book.name}</h2>
      <p>{book.year}</p>
      <div className="book--card__btns">
        <span>${book.price.toFixed(2)}</span>
        <Link to={`../book/${book.id}`}>View in detail</Link>
      </div>
    </div>
  );
};

export default BookCard;
