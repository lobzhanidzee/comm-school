import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import searchIcon from "../../assets/icons/search-icon.svg";

import "./HeaderSearch.css";

const HeaderSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchInput, setSearchInput] = useState(location.search.slice(8));

  const handleClear = (event) => {
    event.preventDefault();
    setSearchInput("");
    navigate("/");
  };

  return (
    <div className="search-container">
      <form action="?">
        <input
          type="text"
          name="search"
          id="search"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Search for book..."
        />
        <button className="search-btn" disabled={!searchInput.trim()}>
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
      <button
        className="clear-btn"
        onClick={handleClear}
        disabled={!searchInput.trim()}
      >
        Clear
      </button>
    </div>
  );
};

export default HeaderSearch;
