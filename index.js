const express = require ('express');
const app = express();
app.use(express.json());
const database = require('./config/database');
database();
const cors = require ('cors');
app.use(cors());
const routes = require('./routes/routes')
app.use('',routes);
app.get('/',(req,res)=>{res.send("Server Running...")});
app.listen(4000);  