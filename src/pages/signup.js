// importing all the required elements 
import Navbar from "../navbar.js"
import "./signup.css"
import { useState } from "react"

//imports for font awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//for more icons add name here 👇
import { faEnvelope,faUser,faLock } from '@fortawesome/free-solid-svg-icons' 


export default function Signup(){
	const [action,setAction] = useState("Login");
	return (
		<div>
		<Navbar/>
		<div className='container'>
        <div className='header'>
            <div className='text'>{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
			<div className="input">
				<div className="img">
				<FontAwesomeIcon icon={faUser} />
				</div>
				<input type="text" placeholder='Enter your username'/>
			</div>
			{action==="Login"?<div></div>:
			<div className="input">
				<div className="img">
					<FontAwesomeIcon icon={faEnvelope} />
				</div>
				<input type="email" placeholder='Enter your email'/>
			</div>
			}
			<div className="input">
				<div className="img">
					<FontAwesomeIcon icon={faLock} />
				</div>
				<input type="password" placeholder='Enter your password'/>
			</div>
		</div>
		{action==="Sign Up"?<div></div>:
			<div className="forgot-password">forgot password ?<span> click here </span></div>
		}
		<div className="submit-container">
			<div className={action==="Login"?"submit gray":"submit"} onClick={()=>setAction("Sign Up")}>Signup</div>
			<div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>setAction("Login")}>Login</div>
		</div>
    </div>
  	</div>
    )
}