const mongoose = require('mongoose'); // required mongoose

const schema = mongoose.Schema({ // mongoose method for defining a schema

    username:{  // username is the key in the object
        
        type:String // datatype of the vaule which is stored in key

    },

    password:{
        
        type:String,
        required:true  // required is a type of validator which forces this value to be present

    }


});

const model = mongoose.model('user',schema);    // mongoose.model compiles a model for you

model.createIndexes(); // auto creates the indexes defined in model schema

module.exports = model;