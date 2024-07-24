// // Register.js

// import React from "react";
// import "./Register.css";
// import { useState } from "react";
// import axios from "../api/axios";
// import { useLocation,useNavigate, Navigate } from "react-router-dom";
// const REGISTER_URL = 'use/api/signup'
// const Register = () => {
//   const location = useLocation()
//   const from = location.state?.from || { pathname: "/" };
//   const [register,setregister] = useState({
//     "email":'',
//     "password":''
//   })

//   const onchange=(e)=>{
//     setregister({...register,[e.target.name]:e.target.value})
//     console.log(register)
//   }

//   const handleSubmit= async(e)=>{
//     e.preventDefault();
//     console.log(Register)
//     await axios.post(REGISTER_URL,register,{
//       headers:{'Content-Type':'application/json'},
//       withCredentials:true
//     }).then(response=>{
//       console.log(response)
//       return <Navigate to={from} />;

//       //navigate to homepage or prev page
//     }).catch(err=>{
//       console.log(err)
//     })
//   }
//   return (
//     <div className="Register-form">
//       <form onSubmit={handleSubmit}>
//         <input type="email" className="form-input" placeholder="Email" onChange={onchange} name="email"/>
//         <input type="password" className="form-input" placeholder="Password"onChange={onchange} name="password"/>
//         <button type="submit" className="submit-btn">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from "react";
import "./Register.css";
import axios from "../api/axios";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const REGISTER_URL = 'use/api/signup';

const Register = () => {
  const location = useLocation();
  const from = location.state?.from || { pathname: "/" };

  const [register, setRegister] = useState({
    "email":'',
    "password":''
  });

  const navigate = useNavigate(); // Use useNavigate hook

  const onchange = (e) => {
    setRegister({...register, [e.target.name]: e.target.value});
    console.log(register);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(register);
    try {
      const response = await axios.post(REGISTER_URL, register, {
        headers: {'Content-Type': 'application/json'},
        withCredentials: true
      });
      console.log(response);
      navigate(from.pathname); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Register-form">
      <form onSubmit={handleSubmit}>
        <input type="email" className="form-input" placeholder="Email" onChange={onchange} name="email"/>
        <input type="password" className="form-input" placeholder="Password" onChange={onchange} name="password"/>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
