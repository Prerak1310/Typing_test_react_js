import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import "./home.css";
//when page open for the first time--->only login button everything else hidden
//user logs in
//login button gone
//profile pic shown
//change dp button available
//when change dp clicked
//dp changed

export default function Home() {
  const [loginStatus, setloginStatus] = useState("Login");

  const logIn = () => {
    navigate("/login");
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setloginStatus("logout");
        console.log("user is logged in");
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
        setloginStatus("login");
      }
    });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <button
          onClick={loginStatus === "logout" ? () => logOut() : () => logIn()}
        >
          {loginStatus}
        </button>
      </div>
    </>
  );
}
