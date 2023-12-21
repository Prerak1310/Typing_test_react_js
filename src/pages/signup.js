import "./signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

//function starts here
export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const wrongpassword = "Passwords do not match";
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confpassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/login");
          // ...
        })
        .catch((err) => {
          setError(err);

          // ..
        });
    } else {
      setError(wrongpassword);
    }
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

        <input
          placeholder="Confirm Password"
          onChange={(e) => setConfPassword(e.target.value)}
          value={confpassword}
        />
        <br />
        {error === wrongpassword ? <div>{error}</div> : <div></div>}
        <button type="submit" onClick={onSubmit}>
          SIGNUP
        </button>
      </form>
    </div>
  );
}
