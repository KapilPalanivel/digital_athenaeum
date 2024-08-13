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
      "William Shakespeare's 'Hamlet' is a profound tragedy that delves into themes of revenge, corruption, and madness. The play revolves around Prince Hamlet of Denmark, who returns home to find his father murdered and his mother hastily remarried to his uncle, Claudius. Haunted by the ghost of his father, Hamlet is consumed by grief and rage, leading him to vow to avenge his father’s death. The narrative intricately explores Hamlet’s internal struggle with his moral duty, his contemplation of existence, and the impact of his actions on the royal court. Shakespeare's portrayal of Hamlet's psychological torment and his existential reflections makes this play a timeless exploration of the human condition.",
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
      "'On the Origin of Species' by Charles Darwin is a groundbreaking work that laid the foundation for modern evolutionary biology. Published in 1859, this seminal text introduced the theory of natural selection, arguing that species evolve over time through a process of adaptation driven by environmental pressures. Darwin meticulously presents evidence from various fields, including paleontology, biogeography, and embryology, to support his theory. His work challenged existing scientific and theological views, igniting a revolution in the understanding of biological diversity and the development of life on Earth. The book remains a cornerstone of evolutionary science and continues to influence contemporary scientific thought.",
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
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    views: "600K",
    favorites: 150,
    comments: "60",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5ryBDA_Ow-wPDGgsRGegarWjLzN763rTlQ&s",
    description:
      "Jane Austen’s 'Pride and Prejudice' is a classic romance novel that offers a sharp critique of early 19th-century English society. Through the eyes of Elizabeth Bennet, the novel addresses themes of social class, marriage, and personal integrity. Elizabeth navigates the complexities of societal expectations and her own evolving feelings for Mr. Fitzwilliam Darcy, a wealthy and initially aloof gentleman. Austen's keen observations and witty dialogue provide a rich commentary on class distinctions and gender roles, while Elizabeth’s journey towards self-awareness and understanding challenges traditional norms. The novel remains celebrated for its incisive character studies and enduring appeal.",
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
      "'Moby-Dick' by Herman Melville is an epic and complex narrative that explores themes of obsession, revenge, and the struggle between man and nature. The novel follows Captain Ahab’s relentless quest to kill Moby Dick, a giant white whale that had previously maimed him. Through the eyes of Ishmael, a sailor aboard Ahab's whaling ship, the story delves into philosophical and existential reflections on fate, free will, and the natural world. Melville’s intricate prose and symbolic depth make 'Moby-Dick' a cornerstone of American literature, offering profound insights into the human psyche and the moral ambiguities of revenge.",
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
      "'The Great Gatsby' by F. Scott Fitzgerald is a defining novel of the Jazz Age, capturing the decadence and moral decay of 1920s America. The story centers on Jay Gatsby, a wealthy and enigmatic man who throws extravagant parties in hopes of rekindling his past romance with Daisy Buchanan. Through the eyes of the narrator, Nick Carraway, Fitzgerald offers a critical examination of the American Dream, exploring themes of aspiration, wealth, and the pursuit of happiness. The novel's lyrical prose and tragic narrative reveal the hollowness of Gatsby’s dreams and the underlying social and moral conflicts of the era.",
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
      "George Orwell’s '1984' is a chilling dystopian novel that serves as a stark warning against the dangers of totalitarianism. Set in a grim future where perpetual war, omnipresent surveillance, and historical manipulation define daily life, the story follows Winston Smith, a low-ranking member of the ruling Party. Winston’s struggle against the oppressive regime led by Big Brother exposes the dehumanizing effects of absolute power and the erasure of individual thought. Orwell’s portrayal of a society stripped of privacy, truth, and autonomy remains a powerful critique of authoritarianism and a profound exploration of personal freedom.",
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
      "'Ponniyin Selvan' by Kalki Krishnamurthy is an epic historical novel set during the Chola Dynasty in medieval South India. The narrative follows the life of the Chola Prince Arulmozhivarman, who later becomes Rajaraja Chola I. Through a richly detailed portrayal of the political intrigue, warfare, and cultural vibrancy of the time, the novel explores the prince’s rise to power and his contributions to the Chola empire. Krishnamurthy’s work weaves together historical facts with fictional elements to create a captivating saga that highlights the grandeur of the Chola dynasty and its impact on Indian history.",
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
      "'Parthiban Kanavu' is a Tamil historical novel by Kalki Krishnamurthy that delves into the dreams and aspirations of the Chola prince Parthiban. Set against the backdrop of a tumultuous era, the story chronicles Parthiban's vision of establishing a Chola empire and the struggles he faces in realizing this ambition. The novel intricately depicts the political landscape of the time, the challenges of leadership, and the personal sacrifices made by the prince. Krishnamurthy’s narrative combines historical events with dramatic storytelling to explore themes of ambition, loyalty, and perseverance.",
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
      "'Sivagamiyin Sabadham' by Kalki Krishnamurthy is a Tamil historical novel set in the Pallava dynasty, focusing on the life of Sivagami, a talented dancer, and her vow of revenge against the Pallava king. The story is set in a time of political intrigue and cultural flourishing, exploring themes of loyalty, vengeance, and the conflict between personal desires and societal expectations. The novel vividly portrays the courtly life, the artistic achievements of the period, and the personal drama of its characters, offering a compelling narrative that combines historical detail with emotional depth.",
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
      "'Thirukkural' is an ancient Tamil text attributed to the sage Thiruvalluvar. Comprising 1,330 couplets, or Kurals, the text is divided into three main sections: Aram (virtue), Porul (wealth), and Inbam (love). Each section addresses different aspects of human life, from ethical behavior and social responsibility to personal relationships and happiness. The concise and profound nature of the couplets provides timeless wisdom on leading a virtuous and balanced life. 'Thirukkural' has been highly regarded for its philosophical depth and practical guidance, making it a revered work in Tamil literature and a significant source of moral and ethical insight.",
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
                <a href="/BookDetails" className="read-button">
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
