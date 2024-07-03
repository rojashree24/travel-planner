import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate=useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", {
        username,
        email,
        password,
      });
      // console.log(response.data); 
    } catch (err) {
      setError(err);
    }
    navigate('/dashboard')
  };
  
 
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
      <a href="/signin">Already have an account?</a>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Signup;