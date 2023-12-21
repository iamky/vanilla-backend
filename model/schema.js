const mongoose = require('mongoose');
const schema = mongoose.Schema({username:{type:String}, password:{type:String,required:true}});
const model = mongoose.model('user',schema);
model.createIndexes();
module.exports = model;