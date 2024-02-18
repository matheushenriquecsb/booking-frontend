import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to="/">
          <span className="logo">Booking.com</span>
        </Link>
        <div className="navbarItems">
          <button className="navbarButton">Cadastre-se</button>
          <button className="navbarButton">Entre</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
