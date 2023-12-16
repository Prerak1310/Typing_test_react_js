import "./App.css";
import { useNavigate } from "react-router-dom";
import mainlogo from "./assets/logo.png";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div class="navbar">
        <ul>
          <li className="navbar-brand">
            <a href="/">
              <img src={mainlogo} width="40" height="40" alt="" />
              {"\u00A0"}
              TYPERIGHT
            </a>
          </li>
        </ul>
        <div>
          <button onClick={() => navigate("/signup")}>Login</button>&nbsp;
        </div>
      </div>
    </>
  );
}
