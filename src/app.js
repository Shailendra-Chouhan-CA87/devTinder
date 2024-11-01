const express = require('express');
const app = express();
const connectDB = require('./config/database');
const User = require('./models/user');


//using middleware for conver json to js object
app.use(express.json()); 
//creating the API for the signUp 
app.post("/signup",async (req,res)=>{
    const user = new User(req.body);
    // const user = new User({
    //     firstName : "sachin",
    //     lastName : "tendulkar",
    //     emailId : "sachin@tendulkar.com",
    //     password : "sachin@123",
    // })

    try{
        await user.save();
        res.send("User Added Successfully..");
    }catch(err){
        res.status(400).send("Error to saving User info :" + err.message);
    }
    
})



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
