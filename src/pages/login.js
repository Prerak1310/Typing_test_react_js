import React, { useState } from "react";
import "./login.css";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { GoogleButton } from "react-google-button";
//function starts here
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        console.log(email);
        console.log(password);
      });
  };

  return (
    <div className="appbg">
      <form className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <input
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-group">
          <div className="login-container-bg"></div>
          <input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button type="submit" onClick={onLogin} className="login-button">
          Login
        </button>{" "}
        <div className="google-button">
          <GoogleButton onClick={handleClick} />
        </div>
        <div className="form-group">
          Dont have an account?
          <a href="/signup">Signup</a>
        </div>
      </form>
    </div>
  );
}
