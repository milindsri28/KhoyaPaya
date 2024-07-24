import React, { useState } from "react";
import "./UpdateAdhar.css";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom"; 

const FETCH_ADHAR_DETAILS = "/adhar/api/getAdharByNumber";
const UPDATE_ADHAR = "/adhar/api/updateAdhar"; 

export default function UpdateAdhar() {
  const navigate = useNavigate(); 
  const [stage, setStage] = useState(1); 
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

  const handleSubmitAadharNumber = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post(FETCH_ADHAR_DETAILS, { adharNumber: adharDetails.adharNumber });
    if (response.data && response.data.message === "Adhar not found") {
      alert("Aadhar not found. Please check the Aadhar number and try again.");
    } else {
      const { name, number, address, faceImage, fingerprintImage } = response.data.data;
      setAdharDetails({
        ...adharDetails,
        name,
        number,
        address,
        faceImage,
        fingerprintImage
      });
      setStage(2);
    }
  } catch (error) {
    console.log(error); 
  }
};

  const handleSubmitUpdateAdhar = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("adharNumber", adharDetails.adharNumber);
      formData.append("name", adharDetails.name);
      formData.append("address", adharDetails.address);
      formData.append("number", adharDetails.number);
      formData.append("fingerprintImage", adharDetails.fingerprintImage);
      formData.append("faceImage", adharDetails.faceImage);

      await axios.patch(UPDATE_ADHAR, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating Aadhar details:", error);
    }
  };

  return (
    <div className="container5">
      <h1 className="addAdharHeading">Update Adhar</h1>
      {stage === 1 ? (
        <form onSubmit={handleSubmitAadharNumber}>
          <label>
            Aadhar Number:
            <input type="text" name="adharNumber" value={adharDetails.adharNumber} onChange={handleChange} />
          </label>
          <button type="submit">Fetch Aadhar Details</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitUpdateAdhar}>
          <label>
            Name:
            <input type="text" name="name" value={adharDetails.name} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={adharDetails.address} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="number" value={adharDetails.number} onChange={handleChange} />
          </label>
          <label>
            Upload Fingerprint:
            <input type="file" name="fingerprintImage" onChange={handleFileChange} accept="image/*" />
            {adharDetails.fingerprintImage && (
              <img src={`http://localhost:5000/${adharDetails.fingerprintImage}`} alt="Fingerprint" />
            )}
          </label>
          <label>
            Upload Face Image:
            <input type="file" name="faceImage" onChange={handleFileChange} accept="image/*" />
            {adharDetails.faceImage && (
              <img src={`http://localhost:5000/${adharDetails.faceImage}`} alt="Face" />
            )}
          </label>
          <button type="submit">Update Adhar</button>
        </form>
      )}
    </div>
  );
}

