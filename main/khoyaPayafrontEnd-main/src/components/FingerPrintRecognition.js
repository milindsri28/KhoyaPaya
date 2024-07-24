import React from "react";
import './FingerPrintRecognition.css';

export default function FingerPrintRecognition() {

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    console.log("Selected file:", file);
  };

  return (
    <div className="container2">
      <h1 className="headingText1">Finger Print Recognition</h1>
      <div className="fileInputContainer">
        <label htmlFor="fileInput">Upload JPG File:</label>
        <input
          type="file"
          id="fileInput"
          accept=".jpg"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
}
