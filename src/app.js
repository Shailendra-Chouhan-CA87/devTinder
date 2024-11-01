const express = require('express');
const app = express();
const connectDB = require('./config/database');

connectDB()
    .then(()=>{
        console.log("connected successfull to the DB !!");
        app.listen(1111,()=>{
            console.log("server listening on the port 1111...");
        });
    })
    .catch((err)=>{
        console.error("Can't Connect ....");
    });
