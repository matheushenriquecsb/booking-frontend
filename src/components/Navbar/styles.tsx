import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  padding: 20px;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;

  a {
    text-decoration: none;
    color: white;
  }
`;

export const Logo = styled.span`
  font-size: 25px;
  font-weight: 700;
  font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica,
    Arial, sans-serif;
`;

export const NavbarButton = styled.button`
  font-size: 17px;
  font-weight: 700;
  align-items: center;
  margin-left: 20px;
  border: none;
  border-radius: 3px;
  margin: 8px;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
  @media (max-width: 968px) {
    display: none;
  }
`;
