import React, { useEffect, useState, useRef, useId } from "react";
import { FaHeart } from 'react-icons/fa';
import { AnimatePresence, motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import "./book.css";


const books = [
  {
    title: "Ethnographie de l'Algérie",
    author: "Houdas, Octave Victor, 1840-1916",
    views: "150K",
    favorites: "2",
    comments: "0",
    cover: "https://lematindalgerie.com/wp-content/uploads/2023/04/BENBADIS.jpg",  // Ensure the path is correct and accessible
    description: "A detailed study of the ethnography of Algeria...",
    content: () => (
      <p>
        This book offers a comprehensive analysis of the various ethnic groups
        in Algeria, exploring their customs, traditions, and social structures.
      </p>
    ),
  },
  {
    title: "Another Book",
    author: "Another Author",
    views: "120K",
    favorites: "3",
    comments: "1",
    cover: "/Book2.jpg",
    description: "An insightful look into...",
    content: () => (
      <p>
        This book delves into the intricacies of its subject matter, providing
        readers with a deep understanding of the topic.
      </p>
    ),
  },
  {
    title: "Third Book",
    author: "Third Author",
    views: "100K",
    favorites: "4",
    comments: "2",
    cover: "/Book3.jpg",
    description: "A fascinating exploration of...",
    content: () => (
      <p>
        This book captures the essence of its theme, offering readers a
        comprehensive overview and analysis.
      </p>
    ),
  },
  {
    title: "Third Book",
    author: "Third Author",
    views: "100K",
    favorites: "4",
    comments: "2",
    cover: "/Book3.jpg",
    description: "A fascinating exploration of...",
    content: () => (
      <p>
        This book captures the essence of its theme, offering readers a
        comprehensive overview and analysis.
      </p>
    ),
  },
  {
    title: "Third Book",
    author: "Third Author",
    views: "100K",
    favorites: "4",
    comments: "2",
    cover: "/Book3.jpg",
    description: "A fascinating exploration of...",
    content: () => (
      <p>
        This book captures the essence of its theme, offering readers a
        comprehensive overview and analysis.
      </p>
    ),
  },
];
const BookCard = ({ book, onClick }) => (
  <div className="book-card" onClick={onClick}>
    <img src={book.cover} alt={book.title} className="book-cover" />
    <h3>{book.title}</h3>
    <p className="book-author">{book.author}</p>
    <div className="book-stats">
      <span>{book.views} views</span>
      <span>
        <FaHeart /> {book.favorites}
      </span>
    </div>
  </div>
);

function Books() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

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

  return (
    <div className="book">
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
        <input type="text" placeholder="Search Books..." />
        <button><FaSearch />Search</button>
      </div>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} onClick={() => setActive(book)} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "-100vh" }}
              transition={{ duration: 0.5 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '700px' }} /* Ensure the width matches the CSS */
            >
              <button className="modal-close" onClick={() => setActive(null)}>
                &times;
              </button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                className="w-full h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    src={active.cover}
                    alt={active.title}
                    className="w-full h-auto object-contain max-h-[400px] mx-auto"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href="#"
                      className="read"
                    >
                      Read
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function" ? active.content() : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Books;
