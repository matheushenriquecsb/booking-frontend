import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <span className="logo">Booking</span>
        <div className="navbarItems">
          <button className="navbarButton">Cadastre-se</button>
          <button className="navbarButton">Entre</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
