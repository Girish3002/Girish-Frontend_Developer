import React, { useEffect, useState } from "react";
import "./SearchForm.scss";
function SearchForm({ onSearch }) {
  const [filters, setFilters] = useState("");
  const [type, setType] = useState("");
  const [landings, setLandings] = useState("");

  const formatType = (inputType) => {
    if (!inputType) {
      return "";
    }
    const typeParts = inputType.split(" ");

    // Capitalize the first character of each part
    const formattedTypeParts = typeParts.map(
      (part) => part.charAt(0).toUpperCase() + part.slice(1)
    );

    // Join the parts back together with a space
    return formattedTypeParts.join(" ");
  };

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilters(e.target.value);
  };
  const handleTypeChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    value = formatType(value);
    console.log(value);
    setType(value);
  };
  const handleLandingChange = (e) => {
    e.preventDefault();
    setLandings(e.target.value);
  };

  const handleSearch = () => {
    onSearch(filters, type, landings);
  };

  return (
    <div className="search-form">
      <div className="container">
        <h1>Search Filters</h1>
      </div>
      <div className="input-fields">
        <input
          type="text"
          placeholder="Status"
          value={filters}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="Type"
          placeholder="Type"
          value={type}
          onChange={handleTypeChange}
        />
        <input
          type="text"
          name="landings"
          placeholder="Landings"
          value={landings}
          onChange={handleLandingChange}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchForm;
