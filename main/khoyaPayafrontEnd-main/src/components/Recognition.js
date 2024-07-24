import React from "react";
import "./recognition.css";
import fingerprintScan from "../images/fingerprintScan.png"
import smilyFaceRecognition from "../images/faceRecognition.png"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container1">
      <span className="headingText">
        <h1>Recognition</h1>
      </span>
      <div className="horizontalLine"></div>
      <div className="bigBox">
        <div className="box1">
          <Link to ='/fingerprint'>
          <div className="boxContent">
            <h2>Fingerprint Recognition</h2>
            <img src={fingerprintScan} alt="Fingerprint Scan" />
          </div>
          </Link>
        </div>
        <div className="box2">
          <Link to="/facialscan">
          <div className="boxContent">
            <h2>Face Recognition</h2>
            <img src={smilyFaceRecognition} alt="Smiley Face Recognition" />
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}