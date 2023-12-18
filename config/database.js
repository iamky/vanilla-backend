const mongoose = require('mongoose'); // require mongoose for use

async function connectDatabase() // ASYNC returns a promise and AWAIT pauses the execution until the promise is resolved

{
    await mongoose.connect('mongodb://localhost:27017/MyMongoDB'); //you can pass more parameters in uri such as username and passwords
    console.log("MongoDB connected");
}

module.exports = connectDatabase; // export sends the function to be used in other areas 