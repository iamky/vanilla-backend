const model = require('../model/schema'); // controller requires model for work

const bcrypt = require('bcrypt'); // bcrypt to encrypt sensitive information

// FOR POST OR CREATE

module.exports.createUser = async (req,res) =>{  // the createuser property will help the controller to identify on which route its gonna work

    let salt = await bcrypt.genSalt(8);  // salt of 8 is generated for bcrypt

    let hashedpassword = await bcrypt.hash(req.body.password,salt); // instead of passing passoword directly we hash it with bcrypt

    let data = await new model({  // data awaits for a new model to be created with schema 

        username:req.body.username, // username is requested from body you can use params too
        password:hashedpassword     // the hashed password is now passed here

    });

    let savedData = await data.save();  // save is a mongoose property save data  

    res.send(savedData);  // res sends saved data into createuser for saving it in DB

    res.send("User Created Succesfully...");

}

// FOR GET OR READ

module.exports.readUser = async(req,res) => {

    let data = await model.find({  // find is mongoose property

        username:req.body.username // username is requested from body for the use in query

    });

    const checkpassword = await bcrypt.compare(req.body.password,data[0].password);  // password is compared by compare method of bcrypt, data[0].password is used here because it is an array of objects

    if (checkpassword==true){

        res.send("Password Matched... Login Succesfull");

    }

    else{

        res.send("Password don't match Login Failed...")

    }


}

// FOR PUT OR UPDATE

module.exports.updateUser = async(req,res) => {



    let data = await model.find({

        username:req.body.username

    });

    const checkpassword = await bcrypt.compare(req.body.password,data[0].password);

    if (checkpassword==true){

        await model.updateOne(               // for a update or delete query we pass the current username then the new username and new property 

            {username:data[0].username},     // the current username is taken from already requested data and passed through a object 

            {
                $set:{username:req.body.newusername}
            },

            {
                new:true
            },

            res.send("Username Updated...")
            
        );

    }

    else{

        res.send("Password don't match... Update Failed...")

    }




}

module.exports.updatePassword = async(req,res) =>{  // updating password works same as updating name but we add bcrypt in the condition


    let data = await model.find({

        username:req.body.username

    });

    const checkpassword = await bcrypt.compare(req.body.password,data[0].password);

    if (checkpassword==true){

        let salt = await bcrypt.genSalt(8)

        let hashedpassword = await bcrypt.hash(req.body.newpassword,salt)

        await model.updateOne(

            {username:data[0].username},

            {
                $set:{password:hashedpassword}
            },

            {
                new:true
            },

            res.send("Password Updated...")
            
        );

    }

    else{

        res.send("Password don't match... Update Failed...")

    }



}

// FOR DELETE

module.exports.deleteUser = async(req,res) => {


    let data = await model.find({

        username:req.body.username

    });

    const checkpassword = await bcrypt.compare(req.body.password,data[0].password);

    if (checkpassword==true){

        await model.deleteOne( // delete one is a mongoose query

            {username:data[0].username},

            res.send("User Removed...")


        );

    }

    else{

        res.send("Password don't match Delete Failed...")

    }



}