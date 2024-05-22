import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { app } from "../../hooks/firebase";
import "./oauth.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function OAuth() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login-google`,
        {
          email: result.user.email,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      throw new Error(error);
    }
  };

  const handleGithubClick = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login-github`,
        {
          fullName: result.user.displayName,
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      throw new Error(error);
    }
  };

  return (
    <div>
      <div className="separator">
        <hr className="line" />
        <span>Ou</span>
        <hr className="line" />
      </div>
      <div className="socialMedia">
        <button type="button" onClick={handleGoogleClick}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google-icon"
            className="mediaIcon"
          />
        </button>
        <button type="button" onClick={handleGithubClick}>
          <img
            src="https://www.svgrepo.com/show/473620/github.svg"
            alt="github-icon"
            className="mediaIcon"
          />
        </button>
      </div>
    </div>
  );
}
