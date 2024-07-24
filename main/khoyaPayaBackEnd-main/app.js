const express = require('express')
const app = express()
const adharModel=require('./models/adharModel');
const userModel=require('./models/userModel');
const adharRouter=require('./routes/adharRouter');
const userRouter=require('./routes/userRouter');
const cors = require('cors')
const mongoose=require('mongoose');
const path = require('path')
const db_link='mongodb+srv://khoyapaya975:saharanpur@cluster0.cgrq5yc.mongodb.net/';
mongoose.connect(db_link)
  .then(function(db){
    console.log("MongoDB connected successfully");
  })
  .catch(function(err){
    console.error("Error connecting to MongoDB:", err);
  });
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}))

app.use(express.json());
app.listen(5000)

app.use("/adhar/api/", adharRouter);
app.use("/use/api/", userRouter);

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/fingerprints', express.static(path.join(__dirname, 'fingerprints')));

