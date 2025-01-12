import { Link, useLocation } from "react-router-dom";
import favoriteIcon from "../../assets/icons/heart.svg";
import favoriteIconActive from "../../assets/icons/heart-active.svg";

import "./HeaderUser.css";

const HeaderUser = () => {
  const location = useLocation();

  return (
    <div className="header--user">
      <Link
        to="/favorites"
        className={location.pathname.includes("/favorites") ? "active" : ""}
      >
        <img
          src={
            location.pathname.includes("/favorites")
              ? favoriteIconActive
              : favoriteIcon
          }
          alt="favorite-icon"
        />
      </Link>
      <Link
        to="/login"
        className={location.pathname.includes("/login") ? "active" : ""}
      >
        Sign In / Sign Up
      </Link>
    </div>
  );
};

export default HeaderUser;
