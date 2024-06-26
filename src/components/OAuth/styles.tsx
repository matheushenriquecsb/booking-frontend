import styled from "styled-components";

export const LoginGoogleButton = styled.button`
  width: 510px;
  background-color: #e53e3e;
  border: none;
  color: #fff;
  border-radius: 0.75rem;
  padding: 0.75rem;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

export const LoginGithubButton = styled.button`
  width: 510px;
  background-color: rgba(43, 42, 42, 0.781);
  border: none;
  color: #fff;
  border-radius: 0.75rem;
  padding: 0.75rem;
  text-transform: uppercase;
`;

export const Separator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  color: #8b8e98;
`;

export const Line = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
`;

export const SocialMedia = styled.div`
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 30px;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  button {
    background-color: white;
    border: 1px solid rgba(214, 210, 210, 0.993);
    cursor: pointer;

    &:hover {
      border: 1px solid #2d79f3;
    }
  }
`;

export const MediaIcon = styled.img`
  width: 40px;
  margin: 20px;
  cursor: pointer;
  border: none;
`;
