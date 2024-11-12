// import userModel from "./models/userModel";
const express = require("express");
const mongoose = require( 'mongoose')
require('dotenv').config();
const userRoutes = require('./routes/userRoute.js');
const userModel = require('./models/userModel.js');
const PORT = 3000;
const dbUri = process.env.DB_URI;

 const app = express();

 app.use(express.json())

 app.get("/" , (req , res ) => {
    res.send("hello world!")
 })



 mongoose.connect(dbUri).then(() => {
    console.log("connect mongoDB");
    
 }
)

app.use('/api/users' , userRoutes)

app.listen(PORT , () => {
   console.log(`Server is running on port ${PORT}`);
})

