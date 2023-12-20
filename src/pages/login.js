import React, { useState } from "react";
import "./login.css";
import { auth ,provider} from "../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword ,signInWithRedirect} from "firebase/auth";
//function starts here
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [value,setValue] = useState('')
  const handleClick =()=>{
      signInWithRedirect(auth,provider);
  }

  
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
    <div className="container">
    <div className="loginform">
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

        <button type="submit" onClick={onLogin}>
          LOGIN
        </button>
        <button onClick={handleClick}>
          sign in with google
        </button>
        <NavLink to="/signup">Signup</NavLink>
      </form>
      
    </div></div>
  );
};
export default Login;
