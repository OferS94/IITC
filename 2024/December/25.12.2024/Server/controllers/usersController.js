const User = require("../models/User.model.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const result = await User.create(req.body);
        console.log(result);

        res.status(201).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id).populate("jokes")
        if (!user) throw new Error("User not found");

        return res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the request body
        if (!req.body.fName) {
            throw new Error("You must provide a First Name");
        }

        if (!req.body.lName) {
            throw new Error("You must provide an Last Name");
        }

        if (!req.body.phone_numer) {
            throw new Error("You must provide an Phone Number");
        }
        const user = await User.findByIdAndUpdate(id, req.body, { new: true });

        if (!user) throw new Error("User not found");

        res.send({
            message: "User updated successfully",
            user,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);

        if (!user) throw new Error("User not found");

        res.send({
            message: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getRandomUser = async (req, res) => {
    try {
        const count = await User.countDocuments();
        const random = Math.floor(Math.random() * count);
        const user = await User.findOne().skip(random);

        res.json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const loginUser = async (req, res) => {
    try {
      const { phone_number, password } = req.body;
  
      // Find the user by phone number
      const user = await User.findOne({ phone_number });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Compare passwords (raw comparison since bcrypt is skipped)
      if (user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // Respond with user details (omit the password)
      res.json({
        user: {
          _id: user._id,
          fName: user.fName,
          lName: user.lName,
          phone_number: user.phone_number,
        },
        message: "Login successful",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getRandomUser,
    loginUser,
};