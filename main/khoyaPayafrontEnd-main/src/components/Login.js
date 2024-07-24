import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "../api/axios";

const LOGIN_URL = 'use/api/login';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [login, setLogin] = useState({
    "email":'',
    "password":''
  });

  const onchange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value});
    console.log(login);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    try {
      const response = await axios.post(LOGIN_URL, login, {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
      });
      console.log(response);
      // Redirect to the homepage after successful login
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <input type="email" className="form-input" placeholder="Email" onChange={onchange} name="email"/>
        <input type="password" className="form-input" placeholder="Password" onChange={onchange} name="password"/>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
