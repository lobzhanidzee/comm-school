import FooterLinks from "../FooterLinks/FooterLinks";
import Logo from "../Logo/Logo";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="page-center-size">
        <Logo />
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
