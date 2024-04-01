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
          <button className="navbarButton">Cadastre-se</button>
          <button className="navbarButton">Entre</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
