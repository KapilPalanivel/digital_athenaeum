// Books.jsx
import React, { useState, useEffect } from "react";
import BookCard from "./BookCard";
import FilterSidebar from "./FilterSidebar";
import Modal from "./Modal";
import { FaSearch } from "react-icons/fa";
import "./book.css";

const initialBooks = [
  // Public Domain Books in English
  {
    book_title: "Hamlet",
    book_author: "William Shakespeare",
    book_genre: "Tragedy",
    book_views: "1M",
    book_favorites: 250,
    comments: "100",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaEAqOg59kQ2fbyn13gSPzSmJhcqbCP8zktA&s",
    book_description:
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
    book_title: "On the Origin of Species",
    book_author: "Charles Darwin",
    book_genre: "Science",
    book_views: "800K",
    book_favorites: 180,
    comments: "80",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2DbbbXHV86ZqzUvJlVH1i74-Ub2nt2RpZQ&s",
    book_description:
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
    book_title: " and PrejudicePride",
    book_author: "Jane Austen",
    book_genre: "Romance",
    book_views: "600K",
    book_favorites: 150,
    comments: "60",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5ryBDA_Ow-wPDGgsRGegarWjLzN763rTlQ&s",
    book_description:
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
    book_title: "Moby-Dick",
    book_author: "Herman Melville",
    book_genre: "Adventure",
    book_views: "500K",
    book_favorites: 130,
    comments: "50",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehXRqt5CJ24R8uMrI06RvxZ6rRYsYo1qvzg&s",
    book_description:
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
    book_title: "The Great Gatsby",
    book_author: "F. Scott Fitzgerald",
    book_genre: "Fiction",
    book_views: "900K",
    book_favorites: 220,
    comments: "90",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s",
    book_description:
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
    book_title: "1984",
    book_author: "George Orwell",
    book_genre: "Dystopian",
    book_views: "1.2M",
    book_favorites: 300,
    comments: "150",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfjfwChyuT8LxMzAxede28TsHDTlJVqdlzA&s",
    book_description:
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
    book_title: "Ponniyin Selvan",
    book_author: "Kalki Krishnamurthy",
    book_genre: "Historical",
    book_views: "700K",
    book_favorites: 210,
    comments: "85",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8BkaBEt1ILfMxRfzF7WrA6PHUYjIcTS52Q&s",
    book_description:
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
    book_title: "Parthiban Kanavu",
    book_author: "Kalki Krishnamurthy",
    book_genre: "Historical",
    book_views: "500K",
    book_favorites: 160,
    comments: "70",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLKl8rHPkpdXgswAzv_CIpNUxLSpHYB3FKIA&s",
    book_description:
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
    book_title: "Sivagamiyin Sabadham",
    book_author: "Kalki Krishnamurthy",
    book_genre: "Historical",
    book_views: "600K",
    book_favorites: 180,
    comments: "75",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrTG6iGnrwhRUJwTeAMCNDXxlymABi4hdhg&s",
    book_description:
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
    book_title: "Thirukkural",
    book_author: "Thiruvalluvar",
    book_genre: "Philosophy",
    book_views: "1.5M",
    book_favorites: 350,
    comments: "200",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kjcU0YPcXhUW3ehAN1oSKbLBGppTWhydMA&s",
    book_description:
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
function Books() {
  const [books, setBooks] = useState(initialBooks);
  const [active, setActive] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  const authors = [...new Set(initialBooks.map((book) => book.book_author))];
  const genres = [...new Set(initialBooks.map((book) => book.book_genre))];

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = books.filter(
      (book) =>
        book.book_title.toLowerCase().includes(lowercasedQuery) ||
        book.book_author.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  useEffect(() => {
    const filtered = books.filter(
      (book) =>
        (!selectedAuthor || book.book_author === selectedAuthor) &&
        (!selectedGenre || book.book_genre === selectedGenre)
    );
    setFilteredBooks(filtered);
  }, [selectedAuthor, selectedGenre, books]);

  const handleFavoriteClick = (index) => {
    const newBooks = [...books];
    newBooks[index].favorited = !newBooks[index].favorited;
    newBooks[index].book_favorites += newBooks[index].favorited ? 1 : -1;
    setBooks(newBooks);
  };

  return (
    <div className="main-container">
      <FilterSidebar
        selectedAuthor={selectedAuthor}
        selectedGenre={selectedGenre}
        authors={authors}
        genres={genres}
        onAuthorChange={setSelectedAuthor}
        onGenreChange={setSelectedGenre}
      />

      <div className="main-content">
        <div id="book_header">
          <div id="book_icon">{/* Add your book icon here */}</div>
          <div id="books_des">
            <h1 id="book_h1">Books</h1>
            <p id="book_p">
              Welcome to the Digital Authenaeum Books collection! Discover a
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

      <Modal active={active} setActive={setActive} />
    </div>
  );
}

export default Books;
