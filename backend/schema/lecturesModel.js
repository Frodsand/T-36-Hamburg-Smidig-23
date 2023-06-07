require('dotenv').config()
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const dbName = 'chewed';

mongoose.connect(process.env.MONGO_URI, {
    dbName: dbName,
  })
    .then(() => {
      console.log(`Connected to MongoDB database: ${dbName}`);
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });

const lecturesSchema = new Schema({
    category: {
        type: String,
        required: [true, 'category is required']
    },
    level: {
        type: String,
        required: [true, 'level is required']
    },
    title: {
        type: String,
        required: [true, 'title is required']
    },
    lectureImage: {
        type: String,
        required: [true, 'lectureImage is required']
    },
    learningOutcome: {
        type: String,
        required: [true, 'learningOutcome is required']
    },
    recipeTitle: {
        type: String,
        required: [true, 'recipeTitle is required']
    },
    recipeImage: {
        type: String,
        required: [true, 'recipeImage is required']
    },
    instructions: {
        type: String,
        required: [true, 'instructions is required']
    },
    ingredients: {
        type: [],
        required: [true, 'ingredients is required']
    }
})

module.exports = mongoose.model("lectures", lecturesSchema);

