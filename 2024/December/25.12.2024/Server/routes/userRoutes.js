const express = require('express');
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    getRandomUser,
    loginUser
} = require('../controllers/usersController.js');

const router = express.Router();

// Get all users
//! DONE: Add to Postman
router.get('/', getAllUsers);

// Create a new user
//! DONE: Add to Postman
router.post('/', createUser);

// Get a random user
//! DONE: Add to Postman
router.get('/random', getRandomUser);

// Get a single user by ID
//! DONE: Add to Postman
router.get('/:id', getUserById);

// Update a user by ID
//! DONE: Add to Postman
router.put('/:id', updateUser);

// Delete a user by ID
//! DONE: Add to Postman
router.delete('/:id', deleteUser);

// Login routing
router.post("/login", loginUser)

module.exports = router;