const express = require('express');

const {createUser} = require('../controller/userController.js')
const router = express.Router();
router.post('/', createUser);
// router.post("/", (req , res) => {
//     res.send("it's working")
// } )

module.exports = router