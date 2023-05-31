const mongoose = require("mongoose")

const Schema = mongoose.Schema

const recipesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    ingredients: {
        type: [],
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("recipes", recipesSchema);

