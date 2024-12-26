import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
      <p>
        Follow us on
        <Link href="https://twitter.com" target="_blank">
          Twitter
        </Link>
        ,
        <Link href="https://facebook.com" target="_blank">
          Facebook
        </Link>
        , and
        <Link href="https://instagram.com" target="_blank">
          Instagram
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
