import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchQuery }) => {
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search Pokémon..."
      onChange={handleSearch}
    />
  );
};

export default SearchBar;
