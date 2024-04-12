import { Link } from "react-router-dom";
import "./navbar.css";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to="/">
          <span className="logo">Booking.com</span>
        </Link>
        <div className="navbarItems">
          <QuestionCircleOutlined style={{ fontSize: "18px" }} />
          <Link to="/signup">
            <button className="navbarButton">Cadastre-se</button>
          </Link>
          <Link to="/signin">
            <button className="navbarButton">Entre</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
