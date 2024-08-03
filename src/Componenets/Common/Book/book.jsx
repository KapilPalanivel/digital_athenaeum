// Books.jsx
import React, { useEffect, useState, useRef, useId } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "./book.css";

const initialBooks = [
  {
    title: "Hamlet",
    author: "William Shakespeare",
    genre: "Tragedy",
    views: "1M",
    favorites: 250,
    comments: "100",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEAqOg59kQ2fbyn13gSPzSmJhcqbCP8zktA&s",
    description:
      "A tragedy by William Shakespeare, Hamlet is a story of revenge, corruption, and madness.",
    favorited: false,
    content: () => (
      <p>
        Hamlet, Prince of Denmark, returns home to find his father murdered and
        his mother remarrying his uncle, Claudius. Haunted by his father's
        ghost, Hamlet vows to avenge his murder.
      </p>
    ),
  },
  {
    title: "On the Origin of Species",
    author: "Charles Darwin",
    genre: "Science",
    views: "800K",
    favorites: 180,
    comments: "80",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2DbbbXHV86ZqzUvJlVH1i74-Ub2nt2RpZQ&s",
    description:
      "A work of scientific literature by Charles Darwin that is considered to be the foundation of evolutionary biology.",
    favorited: false,
    content: () => (
      <p>
        On the Origin of Species, published in 1859, introduced the scientific
        theory that populations evolve over generations through a process of
        natural selection.
      </p>
    ),
  },
  {
    title: " and PrejudicePride",
    author: "Jane Austen",
    genre: "Romance",
    views: "600K",
    favorites: 150,
    comments: "60",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5ryBDA_Ow-wPDGgsRGegarWjLzN763rTlQ&s",
    description:
      "A romantic novel by Jane Austen, focusing on issues of class, marriage, and morality in the early 19th century.",
    favorited: false,
    content: () => (
      <p>
        Pride and Prejudice follows Elizabeth Bennet as she deals with issues of
        manners, upbringing, morality, education, and marriage in the society of
        the landed gentry of the British Regency.
      </p>
    ),
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    genre: "Adventure",
    views: "500K",
    favorites: 130,
    comments: "50",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehXRqt5CJ24R8uMrI06RvxZ6rRYsYo1qvzg&s",
    description:
      "An epic tale of the voyage of the whaling ship Pequod, led by Captain Ahab, who is obsessed with revenge against Moby Dick, a giant white whale.",
    favorited: false,
    content: () => (
      <p>
        Moby-Dick is a novel by Herman Melville in which Captain Ahab seeks
        revenge on a giant white sperm whale named Moby Dick, which on the
        previous whaling voyage destroyed Ahab's ship and severed his leg at the
        knee.
      </p>
    ),
  },
  // Paid Books in English
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    views: "900K",
    favorites: 220,
    comments: "90",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s",
    description:
      "A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.",
    favorited: false,
    content: () => (
      <p>
        The Great Gatsby explores themes of decadence, idealism, resistance to
        change, social upheaval, and excess, creating a portrait of the Jazz Age
        or the Roaring Twenties that has been described as a cautionary tale
        regarding the American Dream.
      </p>
    ),
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    views: "1.2M",
    favorites: 300,
    comments: "150",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfjfwChyuT8LxMzAxede28TsHDTlJVqdlzA&s",
    description:
      "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
    favorited: false,
    content: () => (
      <p>
        The story takes place in an imagined future, the year 1984, when much of
        the world has fallen victim to perpetual war, omnipresent government
        surveillance, historical negationism, and propaganda. The novel's
        protagonist, Winston Smith, is a civil servant in a dystopian society
        governed by the Party and its leader, Big Brother.
      </p>
    ),
  },
  // Public Domain Books in Tamil
  {
    title: "Ponniyin Selvan",
    author: "Kalki Krishnamurthy",
    genre: "Historical",
    views: "700K",
    favorites: 210,
    comments: "85",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8BkaBEt1ILfMxRfzF7WrA6PHUYjIcTS52Q&s",
    description:
      "A historical novel set in the Chola Dynasty, featuring the early life of the Chola Prince Arulmozhivarman.",
    favorited: false,
    content: () => (
      <p>
        Ponniyin Selvan is a Tamil historical novel by Kalki Krishnamurthy,
        written in five volumes, that narrates the story of Arulmozhivarman, who
        later became Rajaraja Chola I, one of the greatest kings in Indian
        history.
      </p>
    ),
  },
  {
    title: "Parthiban Kanavu",
    author: "Kalki Krishnamurthy",
    genre: "Historical",
    views: "500K",
    favorites: 160,
    comments: "70",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKl8rHPkpdXgswAzv_CIpNUxLSpHYB3FKIA&s",
    description:
      "A Tamil historical novel that tells the story of the Chola prince Parthiban and his dream of a Chola empire.",
    favorited: false,
    content: () => (
      <p>
        Parthiban Kanavu is a historical novel by Kalki Krishnamurthy, which
        depicts the dreams and ambitions of the Chola prince Parthiban, who
        dreams of the establishment of a Chola kingdom and the struggle of his
        son Vikraman in achieving it.
      </p>
    ),
  },
  // Paid Books in Tamil
  {
    title: "Sivagamiyin Sabadham",
    author: "Kalki Krishnamurthy",
    genre: "Historical",
    views: "600K",
    favorites: 180,
    comments: "75",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrTG6iGnrwhRUJwTeAMCNDXxlymABi4hdhg&s",
    description:
      "A Tamil historical novel set in the Pallava dynasty, focusing on the life of Sivagami, a dancer, and her vow.",
    favorited: false,
    content: () => (
      <p>
        Sivagamiyin Sabadham is a Tamil historical novel by Kalki Krishnamurthy
        that narrates the events surrounding the Pallava Kingdom, focusing on
        the life of Sivagami, a dancer, and her vow of revenge against the
        Pallava king.
      </p>
    ),
  },
  {
    title: "Thirukkural",
    author: "Thiruvalluvar",
    genre: "Philosophy",
    views: "1.5M",
    favorites: 350,
    comments: "200",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kjcU0YPcXhUW3ehAN1oSKbLBGppTWhydMA&s",
    description:
      "An ancient Tamil text consisting of 1,330 couplets or Kurals, dealing with everyday virtues of an individual.",
    favorited: false,
    content: () => (
      <p>
        Thirukkural is a classic Tamil language text consisting of 1,330
        couplets or Kurals. The text is divided into three books: Aram (virtue),
        Porul (wealth), and Inbam (love), and it covers a wide range of moral
        and ethical aspects of life.
      </p>
    ),
  },
];

const BookCard = ({ book, onClick, onFavoriteClick }) => (
  <div className="book-card" onClick={onClick}>
    <div className="book-card-content">
      <img src={book.cover} alt={book.title} className="book-cover" />
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">{book.author}</p>
    </div>
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
  const [sortOption, setSortOption] = useState("name");
  const ref = useRef(null);
  const id = useId();

  const authors = [...new Set(initialBooks.map((book) => book.author))];
  const genres = [...new Set(initialBooks.map((book) => book.genre))];

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(lowercasedQuery) ||
        book.author.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  useEffect(() => {
    const filtered = books.filter(
      (book) =>
        (!selectedAuthor || book.author === selectedAuthor) &&
        (!selectedGenre || book.genre === selectedGenre)
    );
    setFilteredBooks(filtered);
  }, [selectedAuthor, selectedGenre, books]);

  useEffect(() => {
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      switch (sortOption) {
        case "artist":
          return a.author.localeCompare(b.author);
        case "favorites":
          return b.favorites - a.favorites;
        case "comments":
          return b.comments - a.comments;
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });
    setFilteredBooks(sortedBooks);
  }, [sortOption, filteredBooks]);

  const handleFavoriteClick = (index) => {
    const newBooks = [...books];
    newBooks[index].favorited = !newBooks[index].favorited;
    newBooks[index].favorites += newBooks[index].favorited ? 1 : -1;
    setBooks(newBooks);
  };

  const handleAuthorChange = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="books-container">
      <div className="books-header">
        <div id="book_header">
          <div id="book_icon">{/* Add your book icon here */}</div>
          <div id="books_des">
            <h1 id="book_h1">Books</h1>
            <p id="book_p">
              Welcome to the Digital Athenaeum Books collection! Discover a
              treasure trove of public domain books, thoughtfully curated for
              your reading pleasure. Dive into timeless classics, rare
              manuscripts, and educational gems, all free and legally
              accessible. Whether for study or leisure, our unique collection
              promises to enrich your literary journey with unrestricted,
              high-quality reads.
            </p>
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search Books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            <FaSearch /> Search
          </button>
        </div>
      </div>
      <div className="main-content-container">
        <div className="filter-sidebar">
          <h3>Filters</h3>
          <div className="filter-group">
            <label htmlFor="author-select">Author:</label>
            <select
              id="author-select"
              value={selectedAuthor}
              onChange={handleAuthorChange}
            >
              <option value="">All Authors</option>
              {authors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="genre-select">Genre:</label>
            <select
              id="genre-select"
              value={selectedGenre}
              onChange={handleGenreChange}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="sort-select">Sort by:</label>
            <select
              id="sort-select"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="name">Name</option>
              <option value="artist">Author</option>
              <option value="favorites">Likes</option>
              <option value="comments">Comments</option>
            </select>
          </div>
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
            <p>No books found.</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              ref={ref}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button className="modal-close" onClick={() => setActive(null)}>
                &times;
              </button>
              <img
                src={active.cover}
                alt={active.title}
                className="modal-image"
              />
              <div className="modal-details">
                <div className="modal-title">
                  {active.title}
                  <span className="modal-author">-{active.author}</span>
                </div>
                <div className="modal-description">{active.description}</div>
                <a href="#read-more" className="read-button">
                  Read More
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Books;
