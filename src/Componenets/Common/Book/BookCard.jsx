// BookCard.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './book.css';

const BookCard = ({ book, onClick, onFavoriteClick }) => (
  <div className="book-card" onClick={onClick}>
    <img src={book.cover} alt={book.book_title} className="book-cover" />
    <h3>{book.book_title}</h3>
    <p className="book-book_author">{book.book_author}</p>
    <div className="book-stats">
      <span>{book.book_views} book_views</span>
      <span>
        <FaHeart
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick();
          }}
          style={{ cursor: "pointer", color: book.favorited ? "red" : "black" }}
        />{" "}
        {book.book_favorites}
      </span>
    </div>
  </div>
);

export default BookCard;
