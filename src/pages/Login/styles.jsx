import { Link } from "react-router-dom";
import styled from "styled-components";
import { Input } from "antd";

export const Container = styled.div`
  padding: 0.75rem;
  max-width: 32rem;
  margin-left: auto;
  margin-top: 10px;
  margin-right: auto;
`;
export const Title = styled.div`
  font-size: 1.875rem;
  text-align: center;
  font-weight: 600;
  margin-top: 1.75rem;
  margin-bottom: 1.75rem;
`;
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const FormLink = styled(Link)`
  color: #129ae9;
  text-decoration: none;
`;
export const SignupContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;
`;
export const SigninButton = styled.button`
  background-color: #003580;
  border: none;
  color: #ffffff;
  padding: 0.75rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  transition: opacity 0.3s;
  margin: 20px 0 10px 0;
  font-size: 15px;
  font-weight: 500;
  height: 50px;
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 0.95;
  }
`;

export const InputEmail = styled(Input)`
  background-color: #f8fafc;
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

export const InputPassword = styled(Input.Password)`
  background-color: #f8fafc;
  border-radius: 0.5rem;
  padding: 0.75rem;
`;
