import './App.css'
import { useNavigate } from 'react-router-dom';
// import Signup from './pages/signup';
export default function Navbar(){
    const navigate=useNavigate();
    return (

        <><div class="navbar">
        <ul>
          <li ><button className='navbutton' onClick={()=>navigate("/")}>Home</button></li>
          {/* change where the navigation buttons will take u here 👇 */}
          <li ><button className='navbutton' onClick={()=>navigate("/")}>About</button></li>
          <li ><button className='navbutton' onClick={()=>navigate("/")}>Contact</button></li>
        </ul>
        <div>
          <button className = "Login" onClick={()=>navigate("/signup")}>Login</button>&nbsp;
        </div>
      </div></>
    )
}