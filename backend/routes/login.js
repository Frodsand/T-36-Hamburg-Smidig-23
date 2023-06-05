const express = require('express')

// importing login function
const { loginUser } = require('../controllers/loginControllers')

const router = express.Router()

// creating a login route
router.post('/login', loginUser)

module.exports = router