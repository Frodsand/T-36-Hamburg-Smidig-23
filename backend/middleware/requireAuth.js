const jwt = require('jsonwebtoken')
const users = require('../schema/usersModel')

const requireAuth = async (req, res, next) => {

    // verifying authentication
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }

    //Splitting the returned auth token to get a hold of the last part of the token
    const token = authorization.split(' ')[1]

    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await users.findOne({ _id }).select('_id')
        next()
    } catch (error){
        console.log(error)
        res.status(401).json({error: 'Request is not authorized'})
    } 
}

module.exports = requireAuth