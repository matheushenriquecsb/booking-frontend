import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const Property = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

export const PropertyImg = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  @media (max-width: 968px) {
    width: 90%;
    height: 80px;
  }
`;

export const PropertyName = styled.span`
  color: #333;
  font-weight: bold;
  @media (max-width: 968px) {
    font-size: 12px;
  }
`;

export const PropertyCity = styled.span`
  font-weight: 300;
  @media (max-width: 968px) {
    font-size: 10px;
  }
`;

export const PropertyPrice = styled.span`
  font-weight: 500;
  @media (max-width: 968px) {
    font-size: 15px;
    @media (max-width: 968px) {
      display: none;
    }
  }
`;

export const PropertyRating = styled.div`
  display: flex;
  align-items: center;

  & > button {
    background-color: #003580;
    color: white;
    border: none;
    margin-right: 10px;
    margin-top: 5px;
    font-weight: bold;
    @media (max-width: 968px) {
      display: none;
    }
  }

  & > span {
    font-size: 14px;
    @media (max-width: 968px) {
      display: none;
    }
  }
  @media (max-width: 968px) {
    display: none;
  }
`;

export const PropertyAvaliation = styled.span`
  margin-left: 10px;
  @media (max-width: 968px) {
    display: none;
  }
`;
