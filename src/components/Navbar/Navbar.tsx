import { QuestionCircleOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Container, Logo, NavbarButton, NavbarContainer } from "./styles";

const Navbar = () => {
  const { user, dispatch }: any = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Container>
      <NavbarContainer>
        <Link to="/">
          <Logo>Booking.com</Logo>
        </Link>
        {user ? (
          <Link onClick={handleLogout} to="/">
            <NavbarButton>Logout</NavbarButton>
          </Link>
        ) : (
          <div>
            <QuestionCircleOutlined
              style={{ fontSize: "18px" }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Link to="/signup">
              <NavbarButton>Cadastre-se</NavbarButton>
            </Link>
            <Link to="/signin">
              <NavbarButton>Entre</NavbarButton>
            </Link>
          </div>
        )}
      </NavbarContainer>
    </Container>
  );
};

export default Navbar;
