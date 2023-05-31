const mongoose = require("mongoose")

const Schema = mongoose.Schema

const lecturesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    learningOutcome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("lectures", lecturesSchema)

