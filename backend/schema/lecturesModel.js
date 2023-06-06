const mongoose = require("mongoose")

const Schema = mongoose.Schema

const lecturesSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lectureImage: {
        type: String,
        required: true
    },
    learningOutcome: {
        type: String,
        required: true
    },
    recipeTitle: {
        type: String,
        required: true
    },
    recipeImage: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingrediemts: {
        type: [],
        required: true
    }
})

module.exports = mongoose.model("lectures", lecturesSchema);

