import { Link } from "react-router-dom";
import twitterIcon from "../../assets/icons/twitter-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import googleplayIcon from "../../assets/icons/googleplay-icon.svg";
import appstoreIcon from "../../assets/icons/appstore-icon.svg";

import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <>
      <div className="footer--contacts">
        <h2>Contact</h2>
        <ul>
          <li>4000 address</li>
          <li>344-900-2222</li>
          <li>daviti@infobook.com</li>
        </ul>
        <div className="social-media--icons">
          <h2>Follow Us</h2>
          <ul>
            <li>
              <Link>
                <img src={twitterIcon} alt="twitter icon" />
              </Link>
            </li>
            <li>
              <Link>
                <img src={facebookIcon} alt="facebook icon" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer--quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <div className="footer--apps">
          <h2>Download Apps</h2>
          <Link>Google Play</Link>
          <Link>App Store</Link>
        </div>
      </div>
      <div className="newsletter">
        <h2>Join Our Newsletter</h2>
        <form action="/">
          <input
            type="email"
            name="news-letter"
            id="news-leller"
            placeholder="Email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default FooterLinks;
