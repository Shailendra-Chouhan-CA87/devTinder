// const password = "XRsi1tPP63BW13E0";
// const userName = "shailendra74";
// const URI = "mongodb+srv://shailendra74:XRsi1tPP63BW13E0@namastenodejs.fa4p0.mongodb.net/";

const mongoose = require('mongoose');

const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://shailendra74:XRsi1tPP63BW13E0@namastenodejs.fa4p0.mongodb.net/namasteNodeJS');
}

module.exports = connectDB;