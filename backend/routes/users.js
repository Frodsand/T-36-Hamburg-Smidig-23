const express = require('express')
const User = require('../schema/usersModel')
const { getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/usersControllers')


const router = express.Router()

// GET all users
router.get('/', getUsers)

// GET one user
router.get('/:id', getUser)

/*
// POST a new user
router.post('/', createUser)
*/

// DELETE a new user
router.delete('/:id', deleteUser)

// UPDATE a user
router.patch('/:id', updateUser)


module.exports = router