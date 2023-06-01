const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ingredientsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("ingredients", ingredientsSchema);