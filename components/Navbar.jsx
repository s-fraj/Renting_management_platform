import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <Link to="/" className="brand">
            UniRent
          </Link>
          <div className="nav-links">
            <Link to="/marketplace" className="nav-link">
              Marketplace
            </Link>
            <a className="nav-link" href="#">
              Student Community
            </a>
          </div>
        </div>

        <div className="nav-actions">
          <Link to="/marketplace" className="nav-text">
            Listings
          </Link>
          <a className="primary-button" href="#">
            Renter Dashboard
          </a>
          <a className="login-link" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
