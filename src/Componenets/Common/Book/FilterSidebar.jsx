// FilterSidebar.jsx
import React from 'react';

const FilterSidebar = ({ selectedAuthor, selectedGenre, authors, genres, onAuthorChange, onGenreChange }) => (
  <div className="filter-sidebar">
    <div className="filter-section">
      <label htmlFor="book_author-filter">Author</label>
      <select
        id="book_author-filter"
        value={selectedAuthor}
        onChange={e => onAuthorChange(e.target.value)}
      >
        <option value="">All Authors</option>
        {authors.map((author, index) => (
          <option key={index} value={author}>{author}</option>
        ))}
      </select>
    </div>

    <div className="filter-section">
      <label htmlFor="book_genre-filter">Genre</label>
      <select
        id="book_genre-filter"
        value={selectedGenre}
        onChange={e => onGenreChange(e.target.value)}
      >
        <option value="">All Genres</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>
    </div>
  </div>
);

export default FilterSidebar;
