import React from 'react';
import './book.css';

const FilterSidebar = ({ authors, genres, selectedAuthor, selectedGenre, setSelectedAuthor, setSelectedGenre, sortOption, setSortOption }) => (
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

    <div className="filter-section">
      <h2>Sort By</h2>
      <label>
        <input
          type="radio"
          name="sort"
          value="name"
          checked={sortOption === "name"}
          onChange={e => setSortOption(e.target.value)}
        />
        Name
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="artist"
          checked={sortOption === "artist"}
          onChange={e => setSortOption(e.target.value)}
        />
        Artist
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="favorites"
          checked={sortOption === "favorites"}
          onChange={e => setSortOption(e.target.value)}
        />
        Favorites
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="comments"
          checked={sortOption === "comments"}
          onChange={e => setSortOption(e.target.value)}
        />
        Comments
      </label>
    </div>
  </div>
);

export default FilterSidebar;
