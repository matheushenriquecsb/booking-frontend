import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  z-index: 1;

  @media (max-width: 968px) {
    height: 100px;
  }
`;

export const FeaturedItem = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;
  height: 250px;
  flex: 1;

  @media (max-width: 968px) {
    height: 100px;
  }
`;

export const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedTitle = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;

  @media (max-width: 968px) {
    font-size: 8px;
    bottom: 10px;
    left: 10px;
  }
`;
