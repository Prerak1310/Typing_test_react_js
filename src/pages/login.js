import "./login.css";
import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
//function starts here
const Login = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate;
  const onSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("");
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
    <div className="signupform">
      <form>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Enter Email"
        />
        <br />

        <input
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <br />

        <input
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br />

        <br />

        <button type="submit" onClick={onSubmit}>
          LOGIN
        </button>
      </form>
    </div>
  );
};
export default Login;
