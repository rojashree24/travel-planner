// import React,{useState} from 'react'
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Signin = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     // const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSignin = async (e) => {
//       e.preventDefault();

//       try {
//         const response = await axios.post("http://localhost:5000/signin/", {
//           email,
//           password,
//         });
//         if (response.data.userId) {
//           localStorage.setItem("userId", response.data.userId);
//           navigate("/dashboard");
//         } else {
//           console.log(response.data.message);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//       };

    
    

    

  

   
//   return (
//     <div className="auth-container">
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button onClick={handleSignin}>Signin</button>
//       <a href="/">Don't have an account?</a>
//       {/* {error && <p>{error}</p>} */}
//     </div>
//   );
// }

// export default Signin



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });
      if (response.data.userId) {
        localStorage.setItem("userId", response.data.userId);
        navigate("/dashboard");
      } else {
        setError(response.data.message || "Sign-in failed");
      }
    } catch (error) {
      setError("Error signing in");
      console.error(error);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form action="POST" onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
        <a href="/">Don't have an account?</a>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Signin;
