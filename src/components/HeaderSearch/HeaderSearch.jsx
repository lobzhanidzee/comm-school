import searchIcon from "../../assets/icons/search-icon.svg";

import "./HeaderSearch.css";

const HeaderSearch = () => {
  return (
    <div className="search-container">
      <form action="?">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for book..."
        />
        <button>
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
