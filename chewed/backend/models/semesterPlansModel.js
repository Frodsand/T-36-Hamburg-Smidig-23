const mongoose = require("mongoose")

const Schema = mongoose.Schema

const semesterPlansSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lecture: {
        type: [],
        required: true
    },
    user: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("semesterPlans", semesterPlansSchema);

