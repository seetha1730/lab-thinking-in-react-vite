import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyInStock, setShowOnlyInStock] = useState(false);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value, showOnlyInStock);
  };

  const handleCheckboxChange = () => {
    setShowOnlyInStock(!showOnlyInStock);
    onSearch(searchTerm, !showOnlyInStock);
  };

  return (
    <div className="searchProduct">
      <label>Search</label>
      <br />
      <input
        type="search"
        className="w-100"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div>
        <input
          type="checkbox"
          checked={showOnlyInStock}
          onChange={handleCheckboxChange}
        />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

export default SearchBar;