const mongoose = require("mongoose")

const Schema = mongoose.Schema

const learningOutcomesSchema = new Schema({
    category: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    lecture: [{
        subGoal: {
            type: String,
            required: true
        },
        goalDecription:{
            type: String,
            required: true
        }
    }],
    level: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("learningOutcomes", learningOutcomesSchema);

