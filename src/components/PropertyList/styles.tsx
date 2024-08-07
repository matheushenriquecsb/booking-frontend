import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const ListItem = styled.div`
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const ListImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  @media (max-width: 968px) {
    height: 90px;
  }
`;

export const ListTitles = styled.div`
  & > h1 {
    font-size: 18px;
    color: #444;
    @media (max-width: 968px) {
      font-size: 10px;
    }
  }

  & > h2 {
    font-size: 14px;
    font-weight: 300;
    @media (max-width: 968px) {
      font-size: 8px;
    }
  }
`;
