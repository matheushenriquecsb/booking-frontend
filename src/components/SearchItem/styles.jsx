import styled from "styled-components";

export const SearchContainer = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  cursor: pointer;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;

export const Distance = styled.span`
  font-size: 12px;
`;

export const Taxi = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

export const Subtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const Features = styled.span`
  font-size: 12px;
`;

export const Cancel = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

export const CancelSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`;

export const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 70px;

  & > span {
    font-weight: 500;
  }

  & > button {
    background-color: #003580;
    color: white;
    padding: 2px;
    font-weight: bold;
    border: none;
  }
`;

export const DetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Price = styled.span`
  font-size: 24px;
`;

export const TaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;

export const CheckButton = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;
