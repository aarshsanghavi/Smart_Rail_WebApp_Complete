import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from "../assets/download.png";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Railway System Logo" className="logo-img" />
        <span className="logo-text">Indian Railways</span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/findtrain" className="nav-link">Book Tickets</Link>
        </li>
        <li className="nav-item">
          <Link to="/aboutus" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/pnrstatus" className="nav-link">PNR Status</Link>
        </li>
        <li className="nav-item">
          <Link to="/trainschedule" className="nav-link">Train Schedule</Link>
        </li>
        <li className="nav-item">
          <Link to="/seatavailability" className="nav-link">Seat Availability</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup" className="nav-link">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
