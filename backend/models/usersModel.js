const mongoose = require("mongoose")

const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    semesterplan:{
        type: [],
        required: true
    }

})

module.exports = mongoose.model("users", usersSchema)

