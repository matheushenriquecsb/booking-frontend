import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import OAuth from "../../components/OAuth/OAuth";
import { AuthContext } from "../../context/AuthContext";
import {
  Container,
  FormLink,
  InputContainer,
  InputEmail,
  InputPassword,
  SigninButton,
  SignupContainer,
  Title,
} from "./styles";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const { dispatch }: any = useContext(AuthContext);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      setLoading(true);
      const res = await axios.post(
        `https://booking-api.adaptable.app/auth/login`,
        formData
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setLoading(false);
      navigate("/");
    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <Container>
        <Title>faça o login</Title>
        <InputContainer onSubmit={handleSubmit}>
          <h4>Email</h4>
          <InputEmail
            autoComplete="off"
            placeholder="Insira seu email"
            type="text"
            id="email"
            suffix={
              <Tooltip title="No máximo 8 caracteres">
                <InfoCircleOutlined
                  style={{ color: "rgba(0,0,0,.45)" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              </Tooltip>
            }
            onChange={handleChange}
          />
          <h4>Senha</h4>
          <InputPassword
            type="text"
            id="password"
            placeholder="Insira sua senha"
            onChange={handleChange}
          />
          <SigninButton>
            {loading ? (
              <LoadingOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            ) : (
              "login"
            )}
          </SigninButton>
          <OAuth />
        </InputContainer>
        <SignupContainer>
          <p>Ainda não possui conta?</p>
          <FormLink to="/signup">
            <span>Cadastre-se</span>
          </FormLink>
        </SignupContainer>
      </Container>
    </div>
  );
}
