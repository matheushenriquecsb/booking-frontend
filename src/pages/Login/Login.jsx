import { InfoCircleOutlined, LoadingOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar/Navbar";
import OAuth from "../../components/OAuth/OAuth";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
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
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      throw new Error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="signinContainer">
        <h1 className="signinTitle">faça o login</h1>
        <form onSubmit={handleSubmit} className="inputContainer">
          <h4>Email</h4>
          <Input
            placeholder="Insira seu email"
            type="text"
            id="email"
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
          <button className="signinButton">
            {loading ? <LoadingOutlined /> : "login"}
          </button>
          <OAuth />
        </form>
        <div className="signupContainer">
          <p>Ainda não possui conta?</p>
          <Link className="signupLink" to="/signup">
            <span>Cadastre-se</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
