const mongoose = require('mongoose');
async function connectDatabase(){await mongoose.connect('mongodb://localhost:27017/MyMongoDB');console.log("MongoDB connected");}
module.exports = connectDatabase;