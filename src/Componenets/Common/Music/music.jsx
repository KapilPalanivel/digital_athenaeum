import React, { useEffect, useState, useRef, useId } from "react";
import { FaHeart, FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "./music.css";

const initialMusic = [
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    plays: "150M",
    favorites: 12000,
    comments: "8000",
    cover: "https://upload.wikimedia.org/wikipedia/en/9/9f/Bohemian_Rhapsody.png",
    description:
      "A six-minute suite, consisting of several sections without a chorus, Bohemian Rhapsody is one of Queen's most famous and unique works.",
    favorited: false,
    content: () => (
      <p>
        A six-minute suite, consisting of several sections without a chorus,
        Bohemian Rhapsody is one of Queen's most famous and unique works.
      </p>
    ),
  },
  {
    title: "Moonlight Sonata",
    artist: "Ludwig van Beethoven",
    genre: "Classical",
    plays: "80M",
    favorites: 10000,
    comments: "5000",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven_Hammerklavier.jpg/800px-Beethoven_Hammerklavier.jpg",
    description:
      "One of Beethoven's most popular compositions for the piano, Moonlight Sonata is renowned for its emotional depth and technical challenge.",
    favorited: false,
    content: () => (
      <p>
        One of Beethoven's most popular compositions for the piano, Moonlight
        Sonata is renowned for its emotional depth and technical challenge.
      </p>
    ),
  },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Rock",
    plays: "200M",
    favorites: 15000,
    comments: "9000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/8/89/Led_Zeppelin_-_Stairway_to_Heaven.png",
    description:
      "A masterpiece of rock music, Stairway to Heaven is known for its progressive structure and poetic lyrics.",
    favorited: false,
    content: () => (
      <p>
        A masterpiece of rock music, Stairway to Heaven is known for its
        progressive structure and poetic lyrics.
      </p>
    ),
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    genre: "Pop",
    plays: "300M",
    favorites: 20000,
    comments: "12000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/9/97/Michael_Jackson_-_Billie_Jean.png",
    description:
      "A defining song of the 80s, Billie Jean is famous for its distinctive bassline and Jackson's vocal performance.",
    favorited: false,
    content: () => (
      <p>
        A defining song of the 80s, Billie Jean is famous for its distinctive
        bassline and Jackson's vocal performance.
      </p>
    ),
  },
  {
    title: "Clair de Lune",
    artist: "Claude Debussy",
    genre: "Classical",
    plays: "70M",
    favorites: 9000,
    comments: "4000",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Claude_Debussy_atelier_Nadar_1908.jpg/800px-Claude_Debussy_atelier_Nadar_1908.jpg",
    description:
      "One of Debussy's most famous pieces, Clair de Lune is known for its impressionistic style and emotional subtlety.",
    favorited: false,
    content: () => (
      <p>
        One of Debussy's most famous pieces, Clair de Lune is known for its
        impressionistic style and emotional subtlety.
      </p>
    ),
  },
  {
    title: "Enter Sandman",
    artist: "Metallica",
    genre: "Metal",
    plays: "180M",
    favorites: 13000,
    comments: "7000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/Metallica_-_Enter_Sandman_cover.jpg",
    description:
      "A defining track of the heavy metal genre, Enter Sandman is one of Metallica's most iconic songs.",
    favorited: false,
    content: () => (
      <p>
        A defining track of the heavy metal genre, Enter Sandman is one of
        Metallica's most iconic songs.
      </p>
    ),
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    genre: "Grunge",
    plays: "250M",
    favorites: 16000,
    comments: "10000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/Nirvana_smells_like_teen_spirit.png",
    description:
      "A song that defined the grunge movement, Smells Like Teen Spirit is one of Nirvana's most influential tracks.",
    favorited: false,
    content: () => (
      <p>
        A song that defined the grunge movement, Smells Like Teen Spirit is one
        of Nirvana's most influential tracks.
      </p>
    ),
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Pop",
    plays: "400M",
    favorites: 25000,
    comments: "15000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Shape_of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png/800px-Shape_of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
    description:
      "A global hit, Shape of You is known for its catchy beat and Sheeran's smooth vocals.",
    favorited: false,
    content: () => (
      <p>
        A global hit, Shape of You is known for its catchy beat and Sheeran's
        smooth vocals.
      </p>
    ),
  },
  {
    title: "Symphony No. 9",
    artist: "Ludwig van Beethoven",
    genre: "Classical",
    plays: "60M",
    favorites: 8000,
    comments: "3000",
    cover:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Beethoven_Hammerklavier.jpg/800px-Beethoven_Hammerklavier.jpg",
    description:
      "Also known as the 'Ode to Joy,' Symphony No. 9 is one of Beethoven's most celebrated compositions.",
    favorited: false,
    content: () => (
      <p>
        Also known as the 'Ode to Joy,' Symphony No. 9 is one of Beethoven's
        most celebrated compositions.
      </p>
    ),
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    genre: "Pop",
    plays: "500M",
    favorites: 30000,
    comments: "20000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png",
    description:
      "The title track from Michael Jackson's album, Thriller is known for its groundbreaking music video and infectious rhythm.",
    favorited: false,
    content: () => (
      <p>
        The title track from Michael Jackson's album, Thriller is known for its
        groundbreaking music video and infectious rhythm.
      </p>
    ),
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    genre: "Rock",
    plays: "220M",
    favorites: 14000,
    comments: "8000",
    cover:
      "https://upload.wikimedia.org/wikipedia/en/4/49/Hotelcalifornia.jpg",
    description:
      "An iconic song by the Eagles, Hotel California is known for its haunting lyrics and intricate guitar work.",
    favorited: false,
    content: () => (
      <p>
        An iconic song by the Eagles, Hotel California is known for its haunting
        lyrics and intricate guitar work.
      </p>
    ),
  },
];


const MovieCard = ({ movie, onClick, onFavoriteClick }) => (
  <div className="movie-card" onClick={onClick}>
    <div className="movie-card-content">
      <img src={movie.cover} alt={movie.title} className="movie-cover" />
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-director">{movie.director}</p>
    </div>
    <div className="movie-stats">
      <span>{movie.Plays} Plays</span>
      <span>
        <FaHeart
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteClick();
          }}
          style={{ cursor: "pointer", color: movie.favorited ? "red" : "black" }}
        />{" "}
        {movie.favorites}
      </span>
    </div>
  </div>
);

function Music() {
  const [movies, setMovies] = useState(initialMusic);
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(initialMusic);
  const [selectedDirector, setSelectedDirector] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortOption, setSortOption] = useState("name");
  const ref = useRef(null);
  const id = useId();

  const directors = [...new Set(initialMusic.map((movie) => movie.director))];
  const genres = [...new Set(initialMusic.map((movie) => movie.genre))];

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
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(lowercasedQuery) ||
        movie.director.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredMovies(filtered);
  }, [searchQuery, movies]);

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        (!selectedDirector || movie.director === selectedDirector) &&
        (!selectedGenre || movie.genre === selectedGenre)
    );
    setFilteredMovies(filtered);
  }, [selectedDirector, selectedGenre, movies]);

  useEffect(() => {
    const sortedMovies = [...filteredMovies].sort((a, b) => {
      switch (sortOption) {
        case "director":
          return a.director.localeCompare(b.director);
        case "favorites":
          return b.favorites - a.favorites;
        case "comments":
          return b.comments - a.comments;
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });
    setFilteredMovies(sortedMovies);
  }, [sortOption, filteredMovies]);

  const handleFavoriteClick = (index) => {
    const newMovies = [...movies];
    newMovies[index].favorited = !newMovies[index].favorited;
    newMovies[index].favorites += newMovies[index].favorited ? 1 : -1;
    setMovies(newMovies);
  };

  const handleDirectorChange = (e) => {
    setSelectedDirector(e.target.value);
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="movies-container">
      <div className="movies-header">
        <div id="movie_header">
          <div id="movie_icon">{/* Add your movie icon here */}</div>
          <div id="movies_des">
            <h1 id="movie_h1">Music</h1>
            <p id="movie_p">
              Welcome to the Digital Athenaeum Music collection! Discover a
              treasure trove of public domain movies, thoughtfully curated for
              your viewing pleasure. Dive into timeless classics, rare films,
              and educational gems, all free and legally accessible. Whether for
              study or leisure, our unique collection promises to enrich your
              cinematic journey with unrestricted, high-quality watches.
            </p>
          </div>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search Music..."
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
            <label htmlFor="director-select">Director:</label>
            <select
              id="director-select"
              value={selectedDirector}
              onChange={handleDirectorChange}
            >
              <option value="">All Directors</option>
              {directors.map((director) => (
                <option key={director} value={director}>
                  {director}
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
              <option value="director">Director</option>
              <option value="favorites">Likes</option>
              <option value="comments">Comments</option>
            </select>
          </div>
        </div>
        <div className="movie-list">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie, index) => (
              <MovieCard
                key={index}
                movie={movie}
                onClick={() => setActive(movie)}
                onFavoriteClick={() => handleFavoriteClick(index)}
              />
            ))
          ) : (
            <p>No movies found.</p>
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
                  <span className="modal-director">-{active.director}</span>
                </div>
                <div className="modal-description">{active.description}</div>
                <a href="/MovieDetails" className="read-button">
                  View More
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Music;