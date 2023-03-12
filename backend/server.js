const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
const dotenv =require("dotenv")
const productRoute = require('./routes/api/productRoute');
dotenv.config()



// define a url to connect to the database
const MONGODB_URI = process.env.MONGODB_URI  
mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true  } )
let db = mongoose.connection;

// Check Connection
db.once('open', ()=>{
    console.log('Database connected successfully')
})

// Check for DB Errors
db.on('error', (error)=>{
    console.log(error);
})

// Initializing express
const app = express()

// Body parser middleware
app.use(express.json())

// 
app.use(upload.array()); 

// Cors 
app.use(cors());

// Use Route
app.use('/api/products', productRoute)

// Define the PORT
const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
