import React, { useState } from "react";
import "./FacialScanRecognition.css";

export default function FacialScanRecognition() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBoxClick = () => {
    setPopupVisible(!popupVisible);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setPopupVisible(false);
  };

  const openCamera = () => {
    // Code to open the device camera (use appropriate library or API)
    alert("Opening camera for facial scan...");
  };

  const openFileUpload = () => {
    // Code to open file upload dialog (can use input[type="file"])
    alert("Opening file upload dialog for facial scan...");
  };

  return (
    <div className="container3">
      <div className="box" onClick={handleBoxClick}>
        <h2>Facial Recognition Scan</h2>
      </div>

      {popupVisible && (
        <div className="popup">
          <p>Select an option:</p>
          <button onClick={() => handleOptionClick("scan")}>Scan Face</button>
          <button onClick={() => handleOptionClick("upload")}>Upload Face</button>
        </div>
      )}

      {selectedOption === "scan" && openCamera()}
      {selectedOption === "upload" && openFileUpload()}
    </div>
  );
}