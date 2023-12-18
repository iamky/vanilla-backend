const express = require ('express');  //require express for use
const app = express();  //app calls express

const database = require('./config/database'); // imports the file into a variable
database(); // calls back to the file named database.js and executes the function

app.get('/',(req,res)=>{  // GET req goes to HTTP on '' = PATH  (res = RESPONSE , req = REQUEST) = Callback 

    res.send("Server Running...") //SEND sends HTTP res

});

app.listen(4000);  // bind the host and port 