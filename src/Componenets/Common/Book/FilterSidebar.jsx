import React, { useState } from 'react';

const FilterSidebar = ({ onFilterChange }) => {
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ author, genre, releaseDate });
  };

  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <label htmlFor="author">Author:</label>
        <input 
          type="text" 
          id="author" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          onBlur={handleFilterChange}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="genre">Genre:</label>
        <input 
          type="text" 
          id="genre" 
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          onBlur={handleFilterChange}
        />
      </div>
      <div className="filter-group">
        <label htmlFor="releaseDate">Release Date:</label>
        <input 
          type="date" 
          id="releaseDate" 
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          onBlur={handleFilterChange}
        />
      </div>
    </div>
  );
};

export default FilterSidebar;
