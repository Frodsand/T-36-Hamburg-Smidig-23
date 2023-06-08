const User = require('../schema/usersModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({_id: _id}, process.env.SECRET, { expiresIn: '2d'} )
}

// login user
const loginUser = async (req, res) => {
    const {username, password} = req.body

    try{
        const user = await User.login(username, password)

        // create a token
        const token = createToken(user._id)

        res.status(200).json({username, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }

}

module.exports = { loginUser }