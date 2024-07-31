import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 10px;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  @media (max-width: 968px) {
    width: 100%;
  }
`;

export const MailTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const MailSubTitle = styled.span`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const MailInputContainer = styled.div`
  display: flex;
  align-items: center;

  & > input {
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    border-radius: 5px;
    font-size: medium;
  }

  & > button {
    height: 50px;
    width: 200px;
    background-color: #0071c2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: medium;
  }
  @media (max-width: 968px) {
    width: 100%;
  }
`;
