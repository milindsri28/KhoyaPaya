import React, { useState } from "react";
import "./AdharInfo.css";

const sampleData = [
  {
    adharNumber: "Adhar1",
    name: "John Doe",
    address: "123 Main St",
    contactNumber: "1234567890",
    fingerPrintPhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
    facePhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
  },
  {
    adharNumber: "Adhar2",
    name: "Jane Doe",
    address: "456 Oak St",
    contactNumber: "9876543210",
    fingerPrintPhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
    facePhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
  },
  {
    adharNumber: "Adhar3",
    name: "Alice Smith",
    address: "789 Elm St",
    contactNumber: "4567890123",
    fingerPrintPhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
    facePhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
  },
  {
    adharNumber: "Adhar4",
    name: "Bob Johnson",
    address: "101 Pine St",
    contactNumber: "7890123456",
    fingerPrintPhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
    facePhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
  },
  {
    adharNumber: "Adhar5",
    name: "Eva Williams",
    address: "222 Maple St",
    contactNumber: "0123456789",
    fingerPrintPhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
    facePhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
  },
];

export default function AdharInfo() {
  const [adhars, setAdhars] = useState(sampleData);

  const handleAddAdhar = () => {
    const newAdhar = {
      adharNumber: `Adhar${adhars.length + 1}`,
      name: "abc",
      address: "123",
      contactNumber: "1234567890",
      fingerPrintPhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
      facePhoto: "C:\\Users\\Dell\\Desktop\\material\\projects\\my-app\\src\\images\\uncli_ji.jpg",
    };

    setAdhars((prevAdhars) => [...prevAdhars, newAdhar]);
  };

  const handleUpdateAdhar = (adharNumber) => {
    
    console.log(`Update Adhar ${adharNumber}`);
  };

  const handleDeleteAdhar = (adharNumber) => {
    
    setAdhars((prevAdhars) => prevAdhars.filter((adhar) => adhar.adharNumber !== adharNumber));
  };

  return (
    <div className="container4">
      <h1 className="adharText">All Adhar Info</h1>
      <button onClick={handleAddAdhar} className="addAdharButton">Add Adhar</button>
      {adhars.length > 0 && (
        <div className="box">
          <table className="adharTable">
            <thead>
              <tr>
                <th>Adhar Number</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>FingerPrint Photo</th>
                <th>Face Photo</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {adhars.map((adhar) => (
                <tr key={adhar.adharNumber}>
                  <td>{adhar.adharNumber}</td>
                  <td>{adhar.name}</td>
                  <td>{adhar.address}</td>
                  <td>{adhar.contactNumber}</td>
                  <td>{adhar.fingerPrintPhoto}</td>
                  <td>{adhar.facePhoto}</td>
                  <td>
                    <button className="updateButton" onClick={() => handleUpdateAdhar(adhar.adharNumber)}>
                      Update
                    </button>
                    <button className="deleteButton" onClick={() => handleDeleteAdhar(adhar.adharNumber)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}