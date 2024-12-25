import { Outlet, Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/users"
              className={location.pathname.includes("/users") ? "active" : ""}
            >
              Users
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
        <p>
          Follow us on
          <a href="https://twitter.com" target="_blank">
            {" "}
            Twitter
          </a>
          ,
          <a href="https://facebook.com" target="_blank">
            {" "}
            Facebook
          </a>
          , and
          <a href="https://instagram.com" target="_blank">
            {" "}
            Instagram
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Layout;
