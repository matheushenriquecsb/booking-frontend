import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../hooks/firebase";
import "./oauth.css";

export default function OAuth() {
  const navigate = useNavigate();
  const auth = getAuth(app);

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await axios.post(
        "https://real-cyan-lemming-toga.cyclic.app/auth/login-google",
        {
          email: result.user.email,
        }
      );

      navigate("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleGithubClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await axios.post(
        "https://real-cyan-lemming-toga.cyclic.app/auth/login-github",
        {
          fullName: result.user.displayName,
        }
      );

      navigate("/");
    } catch (error) {
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
