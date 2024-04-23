import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import "./register.css";

export default function SignIn() {
  const [formData, setFormData] = useState({});
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
        "https://joyous-shirt-foal.cyclic.app/auth/register", 
        formData
      );
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="formContainer">
        <h1 className="formTitle">crie sua conta</h1>
        <form onSubmit={handleSubmit} className="inputContainer">
          <h4>Nome</h4>
          <Input
            placeholder="Insira seu nome"
            type="text"
            id="fullName"
            className="inputUsername"
            suffix={
              <Tooltip title="No máximo 50 caracteres">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            onChange={handleChange}
          />
          <h4>Email</h4>
          <Input
            size="large"
            type="text"
            id="email"
            placeholder="Insira seu email"
            className="inputEmail"
            onChange={handleChange}
          />
          <h4>Senha</h4>
          <Input.Password
            type="text"
            id="password"
            placeholder="Insira sua senha"
            className="inputPassword"
            onChange={handleChange}
            visibilityToggle={{
              visible: passwordVisible,
              onVisibleChange: setPasswordVisible,
            }}
          />
          <button className="formButton">
            {loading ? <LoadingOutlined /> : "Cadastre-se"}
          </button>
        </form>
        <div className="formText">
          <p>Já possui conta?</p>
          <Link className="formLink" to="/signin">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
