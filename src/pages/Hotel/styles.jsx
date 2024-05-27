import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

export const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 24px;
`;

export const Address = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Distance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

export const PriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;

export const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImgWrapper = styled.div`
  width: 33%;
`;

export const HotelImg = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

export const DetailsTexts = styled.div`
  flex: 3;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

export const DetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  & > h1 {
    font-size: 18px;
    color: #555;
  }

  & > span {
    font-size: 14px;
  }

  & > h2 {
    font-weight: 300;
  }

  & > button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`;

export const Close = styled(FontAwesomeIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: lightgray;
  cursor: pointer;
`;

export const Arrow = styled(FontAwesomeIcon)`
  margin: 20px;
  font-size: 50px;
  color: lightgray;
  cursor: pointer;
`;

export const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;

  &.close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: lightgray;
    cursor: pointer;
  }

  &.arrow {
    margin: 20px;
    font-size: 50px;
    color: lightgray;
    cursor: pointer;
  }
`;
