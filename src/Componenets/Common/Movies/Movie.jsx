import React, { useEffect, useState, useRef, useId } from "react";
import { FaHeart, FaSearch } from 'react-icons/fa';
import { AnimatePresence, color, motion } from "framer-motion";
import "./movies.css";

const initailMovies = [
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      genre: "Drama",
      views: "3.2M",
      favorites: 600,
      comments: "350",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkvJBqifE6cs7DTepb4SNf_ns5tQPXI0y_Ig&s",
      description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      favorited: false,
      content: () => (
        <p>
          Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.
        </p>
      ),
    },
    {
      title: "Mahanati",
      director: "Nag Ashwin",
      genre: "Biographical",
      views: "1.1M",
      favorites: 400,
      comments: "200",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcA1kNrB5_5E8saLcY5jqVpXsAuMGhjvXuyQ&s",
      description: "Biography of Savitri, an actress from South India who dominated the South Indian film industry for two decades during the 50s and 60s.",
      favorited: false,
      content: () => (
        <p>
          Biography of Savitri, an actress from South India who dominated the South Indian film industry for two decades during the 50s and 60s.
        </p>
      ),
    },
    {
      title: "The Motorcycle Diaries",
      director: "Walter Salles",
      genre: "Adventure",
      views: "900K",
      favorites: 300,
      comments: "150",
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxv4SxpxHjf5PBFARcGGbUfuGRz0FL2aJPgA&s",
      description: "The dramatization of a motorcycle road trip Che Guevara went on in his youth that showed him his life's calling.",
      favorited: false,
      content: () => (
        <p>
          The dramatization of a motorcycle road trip Che Guevara went on in his youth that showed him his life's calling.
        </p>
      ),
    },
    {
      title: "Mersal",
      director: "Atlee",
      genre: "Action",
      views: "4M",
      favorites: 800,
      comments: "400",
      cover: "https://live.staticflickr.com/4447/23781028978_c9977a29cf_b.jpg",
      description: "A magician and a doctor attempt to expose the corruption at the heart of India's medical industry.",
      favorited: false,
      content: () => (
        <p>
          A magician and a doctor attempt to expose the corruption at the heart of India's medical industry.
        </p>
      ),
    },
    {
      title: "Joker",
      director: "Todd Phillips",
      genre: "Thriller",
      views: "5M",
      favorites: 850,
      comments: "500",
      cover: "https://example.com/joker.jpg",
      description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.",
      favorited: false,
      content: () => (
        <p>
          In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.
        </p>
      ),
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      genre: "Science Fiction",
      views: "8M",
      favorites: 950,
      comments: "600",
      cover: "https://example.com/interstellar.jpg",
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      favorited: false,
      content: () => (
        <p>
          A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.
        </p>
      ),
    },
    {
      title: "Baahubali: The Beginning",
      director: "S. S. Rajamouli",
      genre: "Action",
      views: "5M",
      favorites: 800,
      comments: "500",
      cover: "https://example.com/baahubali.jpg",
      description: "In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.",
      favorited: false,
      content: () => (
        <p>
          In ancient India, an adventurous and daring man becomes involved in a decades-old feud between two warring peoples.
        </p>
      ),
    },
    {
      title: "Black Panther",
      director: "Ryan Coogler",
      genre: "Action",
      views: "7M",
      favorites: 900,
      comments: "550",
      cover: "https://example.com/blackpanther.jpg",
      description: "T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.",
      favorited: false,
      content: () => (
        <p>
          T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future.
        </p>
      ),
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      genre: "Crime",
      views: "6M",
      favorites: 1000,
      comments: "700",
      cover: "https://example.com/thegodfather.jpg",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      favorited: false,
      content: () => (
        <p>
          The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.
        </p>
      ),
    },
    {
      title: "Dil Se..",
      director: "Mani Ratnam",
      genre: "Romance",
      views: "2M",
      favorites: 450,
      comments: "300",
      cover: "https://example.com/dilse.jpg",
      description: "The clash between love and ideology is portrayed in this love story between a radio executive and a beautiful revolutionary.",
      favorited: false,
      content: () => (
        <p>
          The clash between love and ideology is portrayed in this love story between a radio executive and a beautiful revolutionary.
        </p>
      ),
    },
    {
      title: "Sivaji: The Boss",
      director: "S. Shankar",
      genre: "Action",
      views: "4.5M",
      favorites: 700,
      comments: "450",
      cover: "https://example.com/sivaji.jpg",
      description: "A software engineer comes to India to serve the nation and invest in its welfare. A few corrupt officials and politicians try to stop him while he tries to do good for the poor.",
      favorited: false,
      content: () => (
        <p>
          A software engineer comes to India to serve the nation and invest in its welfare. A few corrupt officials and politicians try to stop him while he tries to do good for the poor.
        </p>
      ),
    },
    {
      title: "12 Years a Slave",
      director: "Steve McQueen",
      genre: "Biography",
      views: "3.5M",
      favorites: 650,
      comments: "400",
      cover: "https://example.com/12yearsaslave.jpg",
      description: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
      favorited: false,
      content: () => (
        <p>
          In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.
        </p>
      ),
    },
    {
      title: "Thalapathi",
      director: "Mani Ratnam",
      genre: "Crime",
      views: "2.8M",
      favorites: 600,
      comments: "350",
      cover: "https://example.com/thalapathi.jpg",
      description: "An orphan with a violent past forms an alliance with a powerful underworld don.",
      favorited: false,
      content: () => (
        <p>
          An orphan with a violent past forms an alliance with a powerful underworld don.
        </p>
      ),
    },
    {
      title: "Titanic",
      director: "James Cameron",
      genre: "Romance",
      views: "9M",
      favorites: 950,
      comments: "700",
      cover: "https://example.com/titanic.jpg",
      description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      favorited: false,
      content: () => (
        <p>
          A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.
        </p>
      ),
    }
];


const BookCard = ({ book, onClick, onFavoriteClick }) => (
  <div className="book-card" onClick={onClick}>
    <img src={book.cover} alt={book.title} className="book-cover" />
    <h3>{book.title}</h3>
    <p className="book-director">{book.director}</p>
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

function Movies() {
  const [books, setMovies] = useState(initailMovies);
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initailMovies);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const ref = useRef(null);
  const id = useId();

  const directors = [...new Set(initailMovies.map(book => book.director))];
  const genres = [...new Set(initailMovies.map(book => book.genre))];

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
    const filtered = books.filter(book =>
      book.title.toLowerCase().includes(lowercasedQuery) ||
      book.director.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredMovies(filtered);
  }, [searchQuery, books]);

  useEffect(() => {
    const filtered = books.filter(book =>
      (!selectedAuthor || book.director === selectedAuthor) &&
      (!selectedGenre || book.genre === selectedGenre)
    );
    setFilteredMovies(filtered);
  }, [selectedAuthor, selectedGenre, books]);

  const handleFavoriteClick = (index) => {
    const newMovies = [...books];
    newMovies[index].favorited = !newMovies[index].favorited;
    newMovies[index].favorites += newMovies[index].favorited ? 1 : -1;
    setMovies(newMovies);
  };

  return (
    <div className="main-container">
      {/* Sidebar */}
      <div className="filter-sidebar">
        <div className="filter-section">
          <label htmlFor="director-filter">Author</label>
          <select
            id="director-filter"
            value={selectedAuthor}
            onChange={e => setSelectedAuthor(e.target.value)}
          >
            <option value="">All Authors</option>
            {directors.map((director, index) => (
              <option key={index} value={director}>{director}</option>
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
            <h1 id="book_h1">Movies</h1>
            <p id="book_p">
              Welcome to the Digital Authenaeum Movies collection! Discover a treasure trove of public domain books, thoughtfully curated for your reading pleasure. Dive into timeless classics, rare manuscripts, and educational gems, all free and legally accessible. Whether for study or leisure, our unique collection promises to enrich your literary journey with unrestricted, high-quality reads.
            </p>
          </div>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search Movies..." 
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button ><FaSearch /> Search</button>
        </div>
        
        <div className="book-list">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((book, index) => (
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
              <button className="modal-close" onClick={() => setActive(null)}>&times;</button>
              <img src={active.cover} alt={active.title} className="modal-image" />
              <div className="modal-details">
                <div className="modal-title">
                  {active.title}
                  <span className="modal-director">-{active.director}</span>
                </div>
                <div className="modal-description">{active.description}</div>
                <a href="#read-more" className="read-button">Read More</a>
              </div>
            </motion.div>\
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Movies;
