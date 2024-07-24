import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Home from "./components/Home";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Recognition from "./components/Recognition";
import FingerPrintRecognition from "./components/FingerPrintRecognition";
import FacialScanRecognition from "./components/FacialScanRecognition";
import AdharInfo from "./components/AdharInfo";
import AddAdhar from "./components/AddAdhar";
import UpdateAdhar from "./components/UpdateAdhar";
import ContactUs from "./components/ContactUs";
import PrivateRoute from "./components/protected";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Register />} />
          {/* Protected Routes */}
          <Route path="/recognition" element={<PrivateRoute />}>
            <Route index element={<Recognition />} />
          </Route>
          <Route path="/fingerprint" element={<PrivateRoute />}>
            <Route index element={<FingerPrintRecognition />} />
          </Route>
          <Route path="/facialscan" element={<PrivateRoute />}>
            <Route index element={<FacialScanRecognition />} />
          </Route>
          <Route path="/adharinfo" element={<PrivateRoute />}>
            <Route index element={<AdharInfo />} />
          </Route>
          <Route path="/addadhar" element={<PrivateRoute />}>
            <Route index element={<AddAdhar />} />
          </Route>
          <Route path="/updateadhar" element={<PrivateRoute />}>
            <Route index element={<UpdateAdhar />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
