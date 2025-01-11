import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <>
      <div>
        <h2>Contact</h2>
        <ul>
          <li>4000 address</li>
          <li>344-900-2222</li>
          <li>daviti@infobook.com</li>
        </ul>
        <div>
          <h2>Follow Us</h2>
          <ul>
            <li>
              <Link>Twitter</Link>
            </li>
            <li>
              <Link>Facebook</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Quick Links</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <div>
          <h2>Download Apps</h2>
          <Link>Google Play</Link>
          <Link>App Store</Link>
        </div>
      </div>
      <div>
        <h2>Join Our Newsletter</h2>
        <form action="/">
          <input
            type="email"
            name="new-seller"
            id="new-seller"
            placeholder="Email"
          />
          <button>Subscribe</button>
        </form>
      </div>
    </>
  );
};

export default FooterLinks;
