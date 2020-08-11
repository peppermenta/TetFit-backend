const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const exerciseRoutes = require('./routes/exerciseApi/exerciseRoutes');

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_DB_URI,{useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => {
        console.log("Connected to MongoDB...");
    })
    .catch((error) => {
        console.log(error);;
        
    });



app.use(express.json());
app.use(express.urlencoded());

app.use('/exercises',exerciseRoutes);

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`);
})
