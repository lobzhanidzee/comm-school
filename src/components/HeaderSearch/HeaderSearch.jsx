import "./HeaderSearch.css";

const HeaderSearch = () => {
  return (
    <div className="search-container">
      <form action="?">
        <input type="text" name="search" id="search" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default HeaderSearch;
