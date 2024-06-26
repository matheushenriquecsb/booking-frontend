import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiURL } from "../../hooks/useFetch";
import Navbar from "../../components/Navbar/Navbar";
import "./styles";
import {
  FormButton,
  FormContainer,
  FormLink,
  FormText,
  FormTitle,
  InputContainer,
  InputLabel,
  PasswordInput,
} from "./styles";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(`${apiURL}`, formData);
      setLoading(false);
      navigate("/signin");
    } catch (error: any) {
      setLoading(false);
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <FormContainer>
        <FormTitle>crie sua conta</FormTitle>
        <InputContainer onSubmit={handleSubmit}>
          <h4>Nome</h4>
          <InputLabel
            placeholder="Insira seu nome"
            type="text"
            id="fullName"
            suffix={
              <Tooltip title="No máximo 50 caracteres">
                <InfoCircleOutlined
                  style={{ color: "rgba(0,0,0,.45)" }}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                />
              </Tooltip>
            }
            onChange={handleChange}
          />
          <h4>Email</h4>
          <InputLabel
            autoComplete="off"
            size="large"
            type="text"
            id="email"
            placeholder="Insira seu email"
            onChange={handleChange}
          />
          <h4>Senha</h4>
          <PasswordInput
            type="text"
            id="password"
            placeholder="Insira sua senha"
            onChange={handleChange}
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
          <FormButton>
            {loading ? (
              <LoadingOutlined
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              />
            ) : (
              "Cadastre-se"
            )}
          </FormButton>
        </InputContainer>
        <FormText>
          <p>Já possui conta?</p>
          <FormLink to="/signin">
            <span>Login</span>
          </FormLink>
        </FormText>
      </FormContainer>
    </div>
  );
}
