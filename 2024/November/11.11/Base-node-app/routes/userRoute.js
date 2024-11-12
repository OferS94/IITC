const express = require('express');

const {
    createUser,
    findUserById,
    deleteUserById,
    updateUserById
} = require('../controller/userController.js')
const router = express.Router();
router.post('/', createUser);

router.get('/:id', findUserById)
router.delete('/:id', deleteUserById)
router.put('/:id' , updateUserById)
module.exports = router