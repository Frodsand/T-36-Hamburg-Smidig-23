const mongoose = require("mongoose")

const Schema = mongoose.Schema

const lecturesSchema = new Schema({
    
    recipe: {
        type: String,
        required: true
    },
    learningOutcome: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("lectures", lecturesSchema);

