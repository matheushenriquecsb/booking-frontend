import axios from "axios";
import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import "./register.css";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post(
        "https://real-cyan-lemming-toga.cyclic.app/auth/register",
        formData
      );
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signupContainer">
        <h1 className="signupTitle">crie uma conta</h1>
        <form onSubmit={handleSubmit} className="inputContainer">
          <h4>Nome de Usuário</h4>
          <Input
            placeholder="Insira um nome de usúario"
            type="text"
            id="username"
            className="inputUsername"
            onChange={handleChange}
            suffix={
              <Tooltip title="No máximo 8 caracteres">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
          />
          <h4>Email</h4>
          <Input
            size="large"
            type="text"
            id="email"
            placeholder="Insira seu Email"
            className="inputEmail"
            onChange={handleChange}
          />
          <h4>Senha</h4>
          <Input.Password
            type="text"
            id="password"
            placeholder="Senha"
            className="inputPassword"
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
            onChange={handleChange}
          />
          <button className="signupButton" disabled={loading}>
            {loading ? <LoadingOutlined /> : "Cadastre-se"}
          </button>
        </form>
        <div className="loginContainer">
          <p>Já possui conta?</p>
          <Link to="/signin">
            <span className="loginText">Login</span>
          </Link>
        </div>
        <p className={`erroContainer ${error ? "errorSpan" : "okSpan"}`}>
          {error ? "Erro ao cadastrar" : ""}
        </p>
      </div>
    </div>
  );
}
