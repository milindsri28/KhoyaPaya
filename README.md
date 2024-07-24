# Khoya-Paya

Khoya-Paya is a web application developed to help locate and reunite missing individuals, especially those suffering from memory-related conditions such as Alzheimer's disease and Short Term Memory Loss (STML), as well as children who may lose their way. This application leverages advanced facial recognition and fingerprint scanning technologies to match biometric data with the Aadhar database, facilitating the retrieval of the individual's address and relevant information.

## Table of Contents
- [Introduction](#introduction)
- [Motivation](#motivation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [System Design](#system-design)
- [Working Principle](#working-principle)
- [Results and Discussion](#results-and-discussion)
- [Contributors](#contributors)
- [Conclusion](#conclusion)

## Introduction

Khoya-Paya is designed to provide a comprehensive solution for the common issue of individuals losing their way home due to various reasons. By using biometric data linked with their Aadhar details, the application helps these individuals return home safely and provides peace of mind to their loved ones.

## Motivation

Our motivation for developing Khoya-Paya stems from the pressing need to assist vulnerable groups in our society who often find it challenging to remember their address or find their way home. Traditional methods are often inadequate, and our project aims to offer a robust technological solution to this problem.

## Features

- **Facial Recognition**: Utilizes state-of-the-art facial recognition technology to identify individuals.
- **Fingerprint Scanning**: Employs fingerprint scanning to match biometric data.
- **Integration with Aadhar**: Retrieves address and relevant details from the Aadhar database.
- **User-Friendly Interface**: Simple and intuitive interface with voice commands and reminders.
- **Secure Data Handling**: Ensures secure data transmission, storage, and encryption of sensitive information.

## Technologies Used

- **Frontend**: ReactJS, Axios for API integration
- **Backend**: Node.js, Express.js, MongoDB for database management
- **AI and Machine Learning**: Convolutional Neural Networks (CNN) using TensorFlow and OpenCV for image processing
- **Deployment**: AWS services including EC2, S3, CloudFront, Route 53, and ACM

## System Design

Our system consists of a web application with both frontend and backend components. The frontend enables user interaction, while the backend handles image classification and Aadhar database integration. The system processes uploaded images, performs data augmentation, and uses CNN for identifying unique patterns in facial features and fingerprints.

## Working Principle

1. **Image Preprocessing**: Normalizes, resizes, and augments the data to enhance model robustness.
2. **CNN Processing**: Processes the facial features and fingerprints to classify the input image.
3. **Data Matching**: Matches the processed data against the Aadhar database to retrieve relevant information.
4. **Output**: Displays matched individuals with their Aadhar details to help them return home safely.

## Results and Discussion

The Khoya-Paya system demonstrated high accuracy in classifying facial features and fingerprints, achieving a success rate consistent with benchmarks. The robust security measures and precise matching algorithms ensure effective and reliable identification. The system's societal impact is significant, providing a valuable tool for law enforcement agencies and families.

## Contributors

- **Naman Mittal (21BCE10685)**: Frontend development and user-centric design.
- **Milind Srivastava (21BCE11545)**: Project lead, system integration, and data security.
- **Devyanshu Gagneja (21BCE11512)**: ReactJS implementation, UI design, backend development, Login/logout functionality and CRUD operations.
- **Harshdeep Singh (21BCE11461)**: route protection.
- **Vansh Dugar (21MIM10039)**: AI model development and image recognition.
- **Devang Giri Goswami (21BAI10114)**: Biometric authentication implementation.
- **Bishal Roy (21BAI10244)**: Project management and prototype development.
- **Nyasha Rai (21BAI10121)**: Statistical analysis and project reporting.
- **Deveshi Parashar (21BCE10242)**: User research and usability studies.
- **Vivek Singh (21BSA10136)**: AWS deployment and cloud infrastructure setup.

## Conclusion

Khoya-Paya exemplifies the transformative potential of technology in addressing societal challenges. By integrating AI and a user-friendly web application, our project offers a comprehensive solution to the issue of missing persons. The collective effort and expertise of our team have resulted in a system that not only aids in reuniting individuals with their families but also fosters community engagement and responsibility.
