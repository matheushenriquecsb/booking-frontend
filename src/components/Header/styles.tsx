import styled, { css } from "styled-components";
interface HeaderContainerProps {
  type?: string;
}

export const Container = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 968px) {
    padding: 10px;
  }
`;

export const HeaderContainer = styled.div<HeaderContainerProps>`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0 100px 0;

  ${(props): any =>
    props.type === "list" &&
    css`
      margin: 20px 0px 0px 0px;
    `}
`;

export const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &.active {
    border: 1px solid white;
    padding: 10px;
    border-radius: 20px;
  }
`;

export const HeaderDescription = styled.p`
  margin: 20px 0;
`;

export const HeaderButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 600;
  font-size: 17px;
  border-radius: 8px;
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  max-width: 200px;
`;

export const HeaderSearch = styled.div`
  height: 35px;
  background-color: white;
  border: 5px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;

  @media (max-width: 968px) {
    width: 80%;
  }
`;

export const HeaderIcon = styled.span`
  color: lightgray;
  @media (max-width: 968px) {
    display: none;
  }
`;

export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 968px) {
    width: 20%;
  }
`;

export const HeaderSearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 15px;
  font-weight: bold;
`;

export const HeaderSearchText = styled.span`
  color: lightgray;
  cursor: pointer;
  font-weight: 550;

  @media (max-width: 968px) {
    display: none;
  }
`;

export const DatePicker = styled.div`
  position: absolute;
  top: 50px;
  z-index: 2;
  @media (max-width: 968px) {
    display: none;
  }
`;

export const Options = styled.div`
  z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  @media (max-width: 968px) {
    display: none;
  }
`;

export const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  @media (max-width: 968px) {
    display: none;
  }
`;

export const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
  @media (max-width: 968px) {
    display: none;
  }
`;

export const OptionCounterButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
  @media (max-width: 968px) {
    display: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
