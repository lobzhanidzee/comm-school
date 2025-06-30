import { Link, useLocation } from "react-router-dom";
import favoriteIcon from "../../assets/icons/heart.svg";
import favoriteIconActive from "../../assets/icons/heart-active.svg";

import "./HeaderUser.css";
import { useState, useEffect } from "react";

const HeaderUser = () => {
  const location = useLocation();

  const [loggedIn, setLoggedin] = useState(localStorage.getItem("login") === "true");

  useEffect(() => {
    // Listen for changes to localStorage from other tabs/windows
    const handleStorage = () => {
      setLoggedin(localStorage.getItem("login") === "true");
    };
    window.addEventListener("storage", handleStorage);

    // Also update when location changes (after login/logout navigation)
    setLoggedin(localStorage.getItem("login") === "true");

    return () => window.removeEventListener("storage", handleStorage);
  }, [location]);

  const logoutHandle = (e) => {
    e.preventDefault();
    localStorage.removeItem("login");
    setLoggedin(false);
  };

  return (
    <div className="header--user">
      {loggedIn ? (
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