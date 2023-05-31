const express = require('express')
//const User = require('../models/userModel')


const router = express.Router()

// GET all users
router.get('/', (req, res) => {
    res.json({mssg: 'GET all user'})
})

// GET one user
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single user'})
})

// POST a new user
router.post('/', (req, res) => {
    res.json({mssg: 'POST a user'})
})

// DELETE a new user
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a user'})
})

module.exports = router