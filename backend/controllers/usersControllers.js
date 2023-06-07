const User = require("../schema/usersModel")
const mongoose = require('mongoose')

// GET all users
const getUsers = async (req, res) => {
    const users = await User.find({})

    res.status(200).json(users)
}

// GET one user
const getUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No user with that id" })
    }

    const user = await User.findById(id)

    if (!user) {
        return res.status(404).json({ error: "No user with that id" })
    }

    res.status(200).json(user)
}

/*// POST a new user
const createUser = async (req, res) => {
    const {name, username, password, semesterplan} = req.body

    // add to the database
    try {
        const user = await User.create({name, username, password, semesterplan})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
} */

// DELETE a user
const deleteUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No user with that id" })
    }

    const user = await User.findByIdAndDelete({ _id: id })

    if (!user) {
        return res.status(404).json({ error: "No user with that id" })
    }

    res.status(200).json(user)
}

// UPDATE a user
const updateUser = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No user with that id" })
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    res.status(200).json(user)
}

module.exports = {
    getUsers,
    getUser,
    //createUser,
    deleteUser,
    updateUser
};