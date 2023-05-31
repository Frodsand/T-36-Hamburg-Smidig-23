const mongoose = require("mongoose")

const Schema = mongoose.Schema

const learningOutcomesSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("learningOutcomes", learningOutcomesSchema)

