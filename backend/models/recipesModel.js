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
    ingredients: [{
        name: {
        type: String,
        required: true
        },
        amount: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            required: true
        }
    }],
    allergies: {
        type: [],
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("recipes", recipesSchema);

