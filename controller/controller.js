const model = require('../model/schema');
const bcrypt = require('bcrypt');

module.exports.createUser = async (req,res) =>{  
let salt = await bcrypt.genSalt(8);  
let hashedpassword = await bcrypt.hash(req.body.password,salt); 
let data = await new model({ username:req.body.username, password:hashedpassword});
let savedData = await data.save();  
res.send(savedData);  
res.send("User Created Succesfully...");}

module.exports.readUser = async(req,res) => {
let data = await model.find({username:req.body.username});
const checkpassword = await bcrypt.compare(req.body.password,data[0].password); 
if (checkpassword==true){res.send("Password Matched... Login Succesfull");}
else{res.send("Password don't match Login Failed...")}}

module.exports.updateUser = async(req,res) => {
let data = await model.find({username:req.body.username});
const checkpassword = await bcrypt.compare(req.body.password,data[0].password);
if (checkpassword==true){await model.updateOne({username:data[0].username},{$set:{username:req.body.newusername}},{new:true},res.send("Username Updated..."));}
else{res.send("Password don't match... Update Failed...")}}

module.exports.updatePassword = async(req,res) =>{  
let data = await model.find({username:req.body.username});
 const checkpassword = await bcrypt.compare(req.body.password,data[0].password);
if (checkpassword==true){let salt = await bcrypt.genSalt(8);let hashedpassword = await bcrypt.hash(req.body.newpassword,salt);await model.updateOne({username:data[0].username},{$set:{password:hashedpassword}},{new:true},res.send("Password Updated..."));}
 else{res.send("Password don't match... Update Failed...")}}

module.exports.deleteUser = async(req,res) => {
let data = await model.find({username:req.body.username});
const checkpassword = await bcrypt.compare(req.body.password,data[0].password);
if (checkpassword==true){await model.deleteOne({username:data[0].username},res.send("User Removed..."));}
else{res.send("Password don't match Delete Failed...")}}