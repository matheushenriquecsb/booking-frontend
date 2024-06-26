import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { app } from "../../hooks/firebase";
import { apiURL } from "../../hooks/useFetch";
import { Line, MediaIcon, Separator, SocialMedia } from "./styles";

export default function OAuth() {
  const navigate = useNavigate();
  const { dispatch }: any = useContext(AuthContext);
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(`${apiURL}/auth/login-google`, {
        email: result.user.email,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      throw new Error(error);
    }
  };

  const handleGithubClick = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const res = await axios.post(`${apiURL}/auth/login-github`, {
        fullName: result.user.displayName,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error: any) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
      throw new Error(error);
    }
  };

  return (
    <div>
      <Separator>
        <Line />
        <span>Ou</span>
        <Line />
      </Separator>
      <SocialMedia>
        <button type="button" onClick={handleGoogleClick}>
          <MediaIcon
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google-icon"
          />
        </button>
        <button type="button" onClick={handleGithubClick}>
          <MediaIcon
            src="https://www.svgrepo.com/show/473620/github.svg"
            alt="github-icon"
          />
        </button>
      </SocialMedia>
    </div>
  );
}
