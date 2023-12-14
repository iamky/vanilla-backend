const express = require ('express');  //require express for use

const app = express();  //app calls express

app.get('/',(req,res)=>{  // GET req goes to HTTP on '' = PATH  (res = RESPONSE , req = REQUEST) = Callback 

    res.send("Server Running...") //SEND sends HTTP res

});

app.listen(4000);  // bind the host and port 