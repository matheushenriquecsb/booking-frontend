import axios from "axios";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./login.css";

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://real-cyan-lemming-toga.cyclic.app/auth/login",
        formData
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signinContainer">
        <h1 className="signinTitle">faça o login</h1>
        <form onSubmit={handleSubmit} className="inputContainer">
          <h4>Username</h4>
          <Input
            placeholder="Insira seu nome de usúario"
            type="text"
            id="username"
            className="inputUsername"
            suffix={
              <Tooltip title="No máximo 8 caracteres">
                <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
              </Tooltip>
            }
            onChange={handleChange}
          />
          <h4>Senha</h4>
          <Input.Password
            type="text"
            id="password"
            placeholder="Insira sua senha"
            className="inputPassword"
            onChange={handleChange}
          />
          <button className="signupButton">Login</button>
        </form>
        <div className="loginContainer">
          <p>Ainda não possui conta?</p>
          <Link to="/signup">
            <span className="loginText">Cadastre-se</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
