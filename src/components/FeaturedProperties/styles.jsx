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
`;

export const PropertyName = styled.span`
  color: #333;
  font-weight: bold;
`;

export const PropertyCity = styled.span`
  font-weight: 300;
`;

export const PropertyPrice = styled.span`
  font-weight: 500;
`;

export const PropertyRating = styled.div`
  display: flex;
  align-items: center;

  & > button {
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    margin-top: 5px;
    font-weight: bold;
  }

  & > span {
    font-size: 14px;
  }
`;

export const PropertyAvaliation = styled.span`
  margin-left: 10px;
`;
