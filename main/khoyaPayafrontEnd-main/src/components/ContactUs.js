import React, { useState } from "react";
import "./ContactUs.css";
import axios from 'axios'; // Import Axios
const CONTACT_US = '/api/contact'
export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(CONTACT_US, formData);
      console.log("Form submitted successfully:", response.data);
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contactUsContainer">
      <div className="contactUsContent">
        <h1 className="contact">Contact Us</h1>
        <p className="chotuContent">If you have any questions or concerns, feel free to reach out to us.</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Message:
            <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
