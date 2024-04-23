import { Link } from "react-router-dom";
import "./navbar.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link to="/">
          <span className="logo">Booking.com</span>
        </Link>
        {user ? (
          <Link onClick={handleLogout} to="/">
            <button className="navbarButton">Logout</button>
          </Link>
        ) : (
          <div className="navbarItems">
            <QuestionCircleOutlined style={{ fontSize: "18px" }} />
            <Link to="/signup">
              <button className="navbarButton">Cadastre-se</button>
            </Link>
            <Link to="/signin">
              <button className="navbarButton">Entre</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
