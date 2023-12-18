const express = require ('express');  //require express for use
const app = express();  //app calls express
app.use(express.json()); // middleware function which parses incoming requests with json payload which works on body parser

const database = require('./config/database'); // imports the file into a variable
database(); // calls back to the file named database.js and executes the function

const cors = require ('cors'); // cors middleware is used to enable cors(cross origin resource sharing)
app.use(cors());    // express use method for using cors on all pages 

const routes = require('./routes/routes') // routes 
app.use('',routes); // empty parameter is there for root route

app.get('/',(req,res)=>{  // GET req goes to HTTP on '' = PATH  (res = RESPONSE , req = REQUEST) = Callback 

    res.send("Server Running...") //SEND sends HTTP res

});

app.listen(4000);  // bind the host and port 