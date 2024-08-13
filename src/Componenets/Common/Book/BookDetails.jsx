import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./bookDetails.css";

function BookDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // Hardcoded book object in case location.state is not available
  const defaultBook = {
    title: "Thirukkural",
    author: "Thiruvalluvar",
    genre: "Philosophy",
    views: "1.5M",
    favorites: 350,
    comments: "200",
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kjcU0YPcXhUW3ehAN1oSKbLBGppTWhydMA&s",
    description:
      "Here’s an expanded version of the description for Thirukkural:Thirukkural is a revered ancient Tamil text composed by the sage Thiruvalluvar. It consists of 1,330 couplets, known as Kurals, organized into three main sections: Aram (virtue), Porul (wealth), and Inbam (love). Each section delves into the principles of ethical conduct, social responsibility, and personal fulfillment, reflecting the essence of Tamil culture and philosophy. The text offers timeless wisdom on how to lead a virtuous and fulfilling life, addressing various aspects of human behavior and societal norms. Its concise yet profound teachings have made it a cornerstone of Tamil literature and a source of moral guidance for generations.",
    favorited: false,
    content: () => (
      <p>
        Thirukkural is a classic Tamil language text consisting of 1,330
        couplets or Kurals. The text is divided into three books: Aram (virtue),
        Porul (wealth), and Inbam (love), and it covers a wide range of moral
        and ethical aspects of life.
      </p>
    ),
  };

  const { book } = location.state || { book: defaultBook };

  return (
    <motion.div
      className="book-details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="book-details-content">
        <motion.img
          src={book.cover}
          alt={book.title}
          className="book-details-cover"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="book-details-info">
          <motion.h1
            className="book-details-title"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {book.title}
          </motion.h1>
          <motion.h2
            className="book-details-author"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            by {book.author}
          </motion.h2>
          <motion.p
            className="book-details-description"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {book.description}
          </motion.p>
          <motion.div
            className="book-details-summary"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Summary</h3>
            <p>{book.content()}</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="book-details-description"
        style={{ marginLeft: "20px" }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3>Description</h3>
        <p>{book.description}</p>
      </motion.div>
    </motion.div>
  );
}

export default BookDetails;
