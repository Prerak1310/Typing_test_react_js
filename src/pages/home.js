import { signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const [loginStatus, setloginStatus] = useState(false);
  const user = auth.currentUser;
  console.log(user);
  const logOut = (e) => {
    signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setloginStatus(true);
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
        setloginStatus(false);
      }
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <button>alkdjfaskljdf</button>
      <div className="navbar">
        {loginStatus === true ? (
          <button onClick={logOut}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </div>
  );
}
