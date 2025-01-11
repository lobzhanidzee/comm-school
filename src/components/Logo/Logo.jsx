import { Link } from "react-router-dom";
import logoIcon from "../../assets/icons/logo-text.svg";

import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logoIcon} alt="Logo" />
    </Link>
  );
};

export default Logo;
