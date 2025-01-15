import { Link, useLocation } from "react-router-dom";
import favoriteIcon from "../../assets/icons/heart.svg";
import favoriteIconActive from "../../assets/icons/heart-active.svg";

import "./HeaderUser.css";
import { useState } from "react";

const HeaderUser = () => {
  const location = useLocation();

  const [loggedIn, setLoggedin] = useState(false);

  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    setLoggedin(false);
  };

  return (
    <div className="header--user">
      {localStorage.getItem("login") ? (
        <Link to="/favorites">
          <img
            src={
              location.pathname.includes("/favorites")
                ? favoriteIconActive
                : favoriteIcon
            }
            alt="favorite-icon"
          />
        </Link>
      ) : (
        <div className="disabled-link">
          <img
            src={favoriteIcon}
            alt="favorite-icon"
            style={{ opacity: 0.5 }}
          />
        </div>
      )}
      {!loggedIn ? (
        <Link
          to="/login"
          className={location.pathname.includes("/login") ? "active" : ""}
        >
          Sign In
        </Link>
      ) : (
        <button className="logout-btn" onClick={logoutHandle}>
          Logout
        </button>
      )}
    </div>
  );
};

export default HeaderUser;
