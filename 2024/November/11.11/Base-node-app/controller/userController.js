// models import

const User = require('../models/userModel.js')
//create
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
//read
const findUserById = async (req,res) => {
    try{

        const {id} = req.params
        const foundUser = await User.findById(id)

        if(!foundUser) {
            return res.status(404).send({
                status: "failed",
                data: "User Not Found"
            })
        }

        req.send({
            status: 'success',
            data: foundUser
        });

    }catch(error){
        console.log(error);

        if(error.name === "CastError"){
            return res.status(400).send({
                status: "failed",
                data: "this is not a valid id at all",
            })
        }

        res.status(500).send(error)
    }

};

//update
const updateUserById = async( req , res ) => {
    try{
        const {id} = req.params;
        const userStatus = await User.findById(id);

        if(userStatus){
            User.updateOne({_id: id});
            return res.status(200).send({
                status: "success",
                data: "User updated succesfuly"
            });
        }else {
            return res.status(404).send({
                status:"failed",
                data: " user not found"
            });
        }

    } catch (error){
        return res.status(500).send({
            status: " error",
            data:"Error updating User"

        })

    }
}

//delete
const deleteUserById = async( req , res ) => {
    try {
        const {id} = req.params;
        console.log(id);
        const userStatus = await User.findById(id);
        console.log(userStatus);

        if(userStatus){
            User.deleteOne({_id: id });
            return res.status(200).send({
                status: "success",
                data: "user deleted successfuly"
            });
            
        }else {
            return res.status(404).send({
                status:"failed",
                data: "User not found"
            });
        }
        
    } catch (error){
        return res.status(500).send({
            status: " error",
            data:"Error deleting User"

        })
    }
}
module.exports = {
    createUser,
    findUserById,
    deleteUserById,
    updateUserById

}

// const deleteUserById = async( req , res ) => {
//     try {
//         const {id} = req.params
//         const user = await user.findByIdAndDelete(id);

//         if(!user){
//             return res.status(400).send({
//                 status: "failed",
//                 data: "user not found"
//             })
//              return res.status(200).send({
//                 status:"success",
//                 data: "user deleted succsefuly"
//             })

//         }
        

//         res.status(500).send(error)
//     }
// }