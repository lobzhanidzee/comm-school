import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link>
        xcv
        <img src="" alt="" srcset="" />
      </Link>
      <div className="search-container">
        <form action="?">
          <input type="text" name="search" id="search" />
          <button>Search</button>
        </form>
        <Link>❤</Link>
      </div>
    </header>
  );
};

export default Header;
