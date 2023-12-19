// // importing all the required elements
// import Navbar from "../navbar.js"

// import { useState, useEffect } from "react"
// //imports for font awesome icons
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// //for more icons add name here 👇
// import { faEnvelope, faUser, faLock } from '@fortawesome/free-solid-svg-icons'

// // signup function
// export default function Signup() {

//   //form validation logic
//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = () => {

//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
//     }
//   });
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//       errors.username = "Username is required!";
//     }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };
//   //form validation logic

//   const [action, setAction] = useState("Login");
//   return (
//     <div>
//       <Navbar />
//       <div className='container'>
//         <div className='header'>
//           <div className='text'>{action}</div>
//           <div className="underline"></div>
//         </div>
//         <div className="inputs">
//           <div className="input">
//             <div className="img">
//               <FontAwesomeIcon icon={faUser} />
//             </div>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formValues.username}
//               onChange={handleChange}
//             />
// <div className="formerror"><p>{formErrors.username}</p></div>
//           </div>

//           {action === "Login" ? <div></div> :<div>
//             <div className="input">
//               <div className="img">
//                 <FontAwesomeIcon icon={faEnvelope} />
//               </div>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="Email"
//                 value={formValues.email}
//                 onChange={handleChange}
//               />

//             </div>
//             <div className="formerror"><p>{formErrors.email}</p></div>
//             </div>
//           }
//           <div className="input">
//             <div className="img">
//               <FontAwesomeIcon icon={faLock} />
//             </div>
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formValues.password}
//               onChange={handleChange}
//             />

//           </div><div className="formerror">{formErrors.password}</div>
//         </div>
//         {action === "Sign Up" ? <div></div> :
//           <div className="forgot-password"><p>forgot password ?<span className="pass_span">  click here </span></p></div>
//         }
//         <div className="submit-container">
//           <div className={action === "Login" ? "submit gray" : "submit"} onClick={action === "Sign Up" ? () => handleSubmit() : () => setAction("Sign Up")}>Signup</div>
//           <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={action === "Login" ? () => handleSubmit() : () => setAction("Login")}>Login</div>
//         </div>
//       </div>
//     </div>
//   )
// }

import "./signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from 'react';
import {auth,provider} from '../firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//function starts here
export default function Signup() {
  const [email, setEmail] = useState("");
  const [username,setUsername]=useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfPassword] = useState("");
  const wrongpassword="Passowrd match nhi  karta re!"

  const onSubmit=(e)=>
  {
    
    e.preventDefault();
    if(password===confpassword){
    createUserWithEmailAndPassword(auth, email, password)
    
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((err) => {
        setError(err);
        console.log(error)

        // ..
      })}
    else{
      
      setError(wrongpassword)
    }

    
    } 
  const googlelogin=(e)=>
  {
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });     
  }
    
      
  
  return (
    <div className="signupform">
      <form>
        <input type="email" id="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter Email" />
        <br />

        <input placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
        <br />

        <input placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        <br />

         <input placeholder="Confirm Password" onChange={(e)=>setConfPassword(e.target.value)} value={confpassword}/>
        <br /> 
        {error===wrongpassword?<div>{error}</div>:<div></div>}
        <button type="submit" onClick={onSubmit}>SIGNUP</button>
        <button type="submit" onClick={googlelogin}>SIGNUP</button>
      </form>
    </div>
  );
  
  }
