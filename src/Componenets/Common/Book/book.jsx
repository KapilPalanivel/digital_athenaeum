import React, { useEffect, useState, useRef, useId } from "react";
import { FaHeart, FaSearch } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import "./book.css";

const initialBooks = [
  {
    title: "Ethnographie de l'Algérie",
    author: "Houdas, Octave Victor, 1840-1916",
    genre: "Historical",
    views: "150K",
    favorites: 2,
    comments: "0",
    cover: "https://lematindalgerie.com/wp-content/uploads/2023/04/BENBADIS.jpg",
    description: "A detailed study of the ethnography of Algeria...",
    favorited: false,
    content: () => (
      <p>
        This book offers a comprehensive analysis of the various ethnic groups
        in Algeria, exploring their customs, traditions, and social structures.
      </p>
    ),
  },
  {
    title: "Lovely Lady",
    author: "Kalaiarasan Shanmugam Mavan",
    genre: "Fiction",
    views: "120K",
    favorites: 3,
    comments: "1",
    cover: "https://www.bookbaby.com/images/og/og-singlebook.jpg",
    description: "An insightful look into...",
    favorited: false,
    content: () => (
      <p>
        This book delves into the intricacies of its subject matter, providing
        readers with a deep understanding of the topic.
      </p>
    ),
  },
  {
    title: "Italian Without Words",
    author: "Third Author",
    genre: "Non-Fiction",
    views: "100K",
    favorites: 4,
    comments: "2",
    cover: "https://th.bing.com/th/id/OIP.KCgHELOQgt2kgzGzjm9zuQHaLf?rs=1&pid=ImgDetMain",
    description: "A fascinating exploration of...",
    favorited: false,
    content: () => (
      <p>
        This book captures the essence of its theme, offering readers a
        comprehensive overview and analysis.
      </p>
    ),
  },
];

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

function Books() {
  const [books, setBooks] = useState(initialBooks);
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const ref = useRef(null);
  const id = useId();

  const authors = [...new Set(initialBooks.map(book => book.author))];
  const genres = [...new Set(initialBooks.map(book => book.genre))];

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(lowercasedQuery) ||
      book.author.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  useEffect(() => {
    const filtered = books.filter(book =>
      (!selectedAuthor || book.author === selectedAuthor) &&
      (!selectedGenre || book.genre === selectedGenre)
    );
    setFilteredBooks(filtered);
  }, [selectedAuthor, selectedGenre, books]);

  const handleFavoriteClick = (index) => {
    const newBooks = [...books];
    newBooks[index].favorited = !newBooks[index].favorited;
    newBooks[index].favorites += newBooks[index].favorited ? 1 : -1;
    setBooks(newBooks);
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="filter-sidebar">
        <div className="filter-section">
          <label htmlFor="author-filter">Author</label>
          <select
            id="author-filter"
            value={selectedAuthor}
            onChange={e => setSelectedAuthor(e.target.value)}
          >
            <option value="">All Authors</option>
            {authors.map((author, index) => (
              <option key={index} value={author}>{author}</option>
            ))}
          </select>
        </div>

        <div className="filter-section">
          <label htmlFor="genre-filter">Genre</label>
          <select
            id="genre-filter"
            value={selectedGenre}
            onChange={e => setSelectedGenre(e.target.value)}
          >
            <option value="">All Genres</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>{genre}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main content */}
      <div className="main-content">
        <div id="book_header">
          <div id="book_icon">
            {/* Add your book icon here */}
          </div>
          <div id="books_des">
            <h1 id="book_h1">Books</h1>
            <p id="book_p">
              Welcome to the Digital Authenaeum Books collection! Discover a treasure trove of public domain books, thoughtfully curated for your reading pleasure. Dive into timeless classics, rare manuscripts, and educational gems, all free and legally accessible. Whether for study or leisure, our unique collection promises to enrich your literary journey with unrestricted, high-quality reads.
            </p>
          </div>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Books..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button><FaSearch /> Search</button>
        </div>
        
        <div className="book-list">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <BookCard 
                key={index} 
                book={book} 
                onClick={() => setActive(book)} 
                onFavoriteClick={() => handleFavoriteClick(index)}
              />
            ))
          ) : (
            <div className="no-results">
              <p>No results found 😟</p>
            </div>
          )}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5 }}
              className="modal-overlay"
              onClick={() => setActive(null)}
            >
              <motion.div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={() => setActive(null)}>
                  &times;
                </button>
                <motion.div
                  layoutId={`card-${active.title}-${id}`}
                  className="w-full h-full flex flex-col items-center bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                >
                  <motion.div layoutId={`image-${active.title}-${id}`}>
                    <img
                      src={active.cover}
                      alt={active.title}
                      className="modal-image"
                    />
                  </motion.div>

                  <div className="modal-details">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="modal-title"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="modal-description"
                    >
                      {active.description}
                    </motion.p>
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href="#"
                      className="read-button"
                    >
                      Read
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Books;
