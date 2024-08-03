import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './book.css';

const BookCard = ({ book, onClick, onFavoriteClick }) => (
  <div className="book-card" onClick={onClick}>
    <img src={book.cover} alt={book.title} className="book-cover" />
    <h3>{book.title}</h3>
    <p className="book-author">{book.author}</p>
    <div className="book-stats">
      <span>{book.views} views</span>
      <span>
        <FaHeart
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick();
          }}
          style={{ cursor: "pointer", color: book.favorited ? "red" : "black" }}
        />{" "}
        {book.favorites}
      </span>
    </div>
  </div>
);

export default BookCard;
                                                                                                                                                              