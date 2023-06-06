const mongoose = require("mongoose")

const Schema = mongoose.Schema

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    semesterplan:{
        type: []
    }

})

module.exports = mongoose.model("users", usersSchema);

