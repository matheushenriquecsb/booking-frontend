import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 0 20px;
`;

export const HomeSubtitles = styled.h1`
  width: 1024px;
  height: 100%;
  font-size: 20px;

  @media (max-width: 968px) {
    font-size: 10px;
    padding-top: 5px;
    width: 100%;
  }
`;
