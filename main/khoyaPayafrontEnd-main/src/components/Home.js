import React from "react";
import unclephoto from "../images/uncli ji.png"
import "./Home.css"; 
export default function Home() {

    return (
        <div className="container">
            <span className="text">
            Khoya-Paya is used to classify unorganized data in simple form and help us to determine a particular data in a dataset. It helps us to search in an unorganized data in an effective way and decreases our effort. This project is based on Image Classifaction & data representation with respect of image.
            <br/>
            <br/>
            The objective of the project is to use the Khoya – Paya data set to identify the different facial and fingerprint from the given dataset using CNN model and report the values of the performance measures for different models.
            <br/>
            <br/>

            Khoya – paya is intend to help lost people that are incapable of reaching their home by themselves and also reduce word load of the police department.

Khoya – Paya data set to identify the different facial and fingerprint from the given dataset using CNN model and report the values of the performance measures for different models 

            </span>
            <span className="image">
            <img src={unclephoto} alt="uncle ji"/>
            </span>
        </div>
    )
}