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
  const wrongpassword = "Passwords do not match!!!";
  const navigate = useNavigate();
  //FUNCTION FOR MAIN SIGNUP BUTTON
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
  //...

  return (
    <div className="appbg_signup">
      <form className="signup-container">
        {/* EMAIL FIELD */}
        <div className="form_group_signup">
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter Email"
          />
        </div>
        {/* ... */}
        {/* USERNAME FIELD */}
        <div className="form_group_signup">
          <input
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        {/* ... */}
        {/* PASSWORD FIELD */}
        <div className="form_group_signup">
          <input
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {/* ... */}
        {/* CONFIRM PASSWORD FIELD */}
        <div className="form_group_signup">
          <input
            placeholder="Confirm Password"
            onChange={(e) => setConfPassword(e.target.value)}
            value={confpassword}
          />
        </div>
        {/* ... */}
        {/* MAIN SIGNUP BUTTON */}
        <div className="form_group_signup">
          <button type="submit" onClick={onSubmit} className="signup_button">
            SIGNUP
          </button>
          {error === wrongpassword ? (
            <div className="passmatch">
              <p>{error}</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        {/* ... */}
      </form>
    </div>
  );
}
