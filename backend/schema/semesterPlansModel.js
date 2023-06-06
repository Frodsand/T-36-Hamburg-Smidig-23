const mongoose = require("mongoose")

const Schema = mongoose.Schema

const semesterPlansSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lectureID: {
        type: []
    },
    userId: {
        type: String,
    }
})

module.exports = mongoose.model("semesterPlans", semesterPlansSchema);

