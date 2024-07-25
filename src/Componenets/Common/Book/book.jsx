import React, { useEffect, useState } from "react";
import "./book.css";
import { FaSearch } from "react-icons/fa";

const books = [
  {
    title: "Ethnographie de l'Algérie",
    author: "Houdas, Octave Victor, 1840-1916",
    views: "150K",
    favorites: "2",
    comments: "0",
    cover: "Book1.jpg",
  },
  {
    title: "Another Book",
    author: "Another Author",
    views: "120K",
    favorites: "3",
    comments: "1",
    cover: "Book2.jpg",
  },
  {
    title: "Third Book",
    author: "Third Author",
    views: "100K",
    favorites: "4",
    comments: "2",
    cover: "Book3.jpg",
  },
  {
    title: "Third Book",
    author: "Third Author",
    views: "100K",
    favorites: "4",
    comments: "2",
    cover: "Book3.jpg",
  },
  {
    title: "Third Book",
    author: "Third Author",
    views: "100K",
    favorites: "4",
    comments: "2",
    cover: "Book3.jpg",
  },
];

const BookCard=({book}) =>(
  <div className="Book-card">
    <img src={book.cover} alt={book.title}></img>
    <h3>{book.title}</h3>
    <div className="book-stats">
        <span>{book.views} views</span>
        <span>{book.favorites} favorites</span>
        <span>{book.comments} comments</span>
    </div>
  </div>
);
function Books() {
  const[visibleBooks,setVisibleBooks]=useState(3);
  
  const loadMoreBooks = () =>{
    setVisibleBooks((prevVisibleBooks)=>prevVisibleBooks+3);
  };

  useEffect(()=>{
    const handleScroll=()=>{
      if(
        window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight
      )
      return;
      loadMoreBooks();
    };

    window.addEventListener("scroll",handleScroll);
    return()=> window.removeEventListener("scroll",handleScroll);
  },[]);
  return (

    <div className="book">
      <div id="book_header">
        <div id="book_icon">
        </div>
        <div id="books_des">
          <h1 id="book_h1">Books</h1>
          <p id="book_p">
            Welcome to the Digital Authenaeum Books collection! Discover a treasure trove of public domain books, thoughtfully curated for your reading pleasure. Dive into timeless classics, rare manuscripts, and educational gems, all free and legally accessible. Whether for study or leisure, our unique collection promises to enrich your literary journey with unrestricted, high-quality reads.
          </p>
        </div>
      </div>
        <div className="search-container">
          <input type="text" placeholder="Search Books..."></input>
          <button><FaSearch/>Search</button>
        </div>
        <div className="book-list">
            {books.slice(0,visibleBooks).map((book,index)=>(
              <BookCard key={index} book={book}/>
            ))}
        </div>
    </div>
  );
}
export default Books;
