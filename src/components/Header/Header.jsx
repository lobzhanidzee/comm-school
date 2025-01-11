import Logo from "../Logo/Logo";
import HeaderSearch from "../HeaderSearch/HeaderSearch";
import HeaderUser from "../HeaderUser/HeaderUser";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="page-center-size">
        <Logo />
        <HeaderSearch />
        <HeaderUser />
      </div>
    </header>
  );
};

export default Header;
