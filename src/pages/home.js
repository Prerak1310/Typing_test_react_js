import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home() {
  const [loginStatus, setloginStatus] = useState(false);
  const user = auth.currentUser;
  console.log(user);
  const logOut = (e) => {
    signOut(auth);
  };

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
