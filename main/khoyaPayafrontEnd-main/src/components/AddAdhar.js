import React, { useState } from "react";
import "./AddAdhar.css";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom"; 

const ADD_ADHAR = "adhar/api/addAdhar"

export default function AddAdhar() {
  const navigate = useNavigate(); 
  const [adharDetails, setAdharDetails] = useState({
    adharNumber: "",
    name: "",
    address: "",
    number: "",
    fingerprintImage: null,
    faceImage: null,
  });

  const handleChange = (e) => {
    setAdharDetails((prevDetails) => ({ ...prevDetails, [e.target.name]: e.target.value }));
    console.log(adharDetails)
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setAdharDetails((prevDetails) => ({ ...prevDetails, [name]: files[0] }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(adharDetails)
    await axios.post(ADD_ADHAR,adharDetails,{
      headers:{'Content-Type':'multipart/form-data'},
      withCredentials:true
    }) 
    .then(response=>{
      console.log(response)
    }).catch(error=>{
      console.log(error)
    })
    console.log("Adhar details submitted:", adharDetails);
    navigate("/");
  };

  return (
    <div className="container5">
      <h1 className="addAdharHeading">Add Adhar</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Adhar Number<span className="laal">*</span>:
          <input type="text" name="adharNumber" value={adharDetails.adharNumber} onChange={handleChange} required />
        </label>
        <label>
          Name<span className="laal">*</span>:
          <input type="text" name="name" value={adharDetails.name} onChange={handleChange} required />
        </label>
        <label>
          Address<span className="laal">*</span>:
          <input type="text" name="address" value={adharDetails.address} onChange={handleChange} required />
        </label>
        <label>
          Phone Number<span className="laal">*</span>:
          <input type="text" name="number" value={adharDetails.number} onChange={handleChange} required />
        </label>
        <label>
          Upload Fingerprint<span className="laal">*</span>:
          <input type="file" name="fingerprintImage" onChange={handleFileChange} accept="image/*" required />
        </label>
        <label>
          Upload Face Image<span className="laal">*</span>:
          <input type="file" name="faceImage" onChange={handleFileChange} accept="image/*" required />
        </label>
        <button type="submit">Add Adhar</button>
      </form>
    </div>
  );
}