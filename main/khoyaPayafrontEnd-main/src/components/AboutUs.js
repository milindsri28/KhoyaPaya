import React from "react";
import news from "../images/news about us.png"
import "./AboutUs.css";
export default function AboutUs() {
    return(
        <div className="container">
        <span className="text">
        We, as a team, have developed Khoya-Paya, a groundbreaking tool designed to tackle the challenge of organizing unstructured data effectively. Khoya-Paya utilizes innovative image classification techniques coupled with advanced data representation methodologies to simplify the process of navigating through vast datasets.
Our motivation stemmed from the frustration of dealing with unorganized data, where finding specific information was akin to searching for a needle in a haystack. With Khoya-Paya, we aimed to revolutionize this process by providing a user-friendly solution that streamlines data search and retrieval.
<br/>
<br/>

It is very difficult to find any lost personnel so we decided to make KHOYA PAYA so that we can use individuals face & fingerprint scan and run through Aadhar card database and gets individuals details and drop them safely.

<br/>
<br/>

There is only one way for our team to motivate our self to work hard: We don’t think about it as hard work. We think about it as part of making our self into who We want to be. Once we have made the choice to do something, we try not to think so much about how difficult or frustrating or impossible that might be; We just think about how good it must feel to be that, or how proud We might be to have done that. Make hard look easy. 

<br/>
<br/>

This trains a Convolutional Neural Network (CNN) model to classify images of individual. It's okay if you don't understand all the details; this is a fast-paced overview of a complete Computer Vision program with the details explained. 
        </span>
        <span className="image">
        <img src={news} alt="news ka fotu"/>
        </span>
    </div>
    )
}