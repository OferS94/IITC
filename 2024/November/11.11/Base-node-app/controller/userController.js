// models import

const User = require('../models/userModel.js')

const createUser = async (req , res) => {
    try {
    const {fName , lName , phoneNumber , email} = req.body

    if(!fName && !lName && !phoneNumber , !email ){
        return res.status(400).send({
            status: "error",
            message: "one of the fields is missing "

        });
    }
    const newUser = new User({
        fName,
        lName,
        phoneNumber,
        email
    });
    await newUser.save();

    res.send({
        status: "success",
        data: newUser
    });
    } catch(error) { 
        console.error(error)
        if(error?.errorResponse?.code === 11000){
            return res.status(400).send({
                status: "failed",
                message: "user already exists"
            })
        }
    }
};
module.exports = {
    createUser
}