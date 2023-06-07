
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


const ingredientsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Number is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    image: {
        type: String,
        required: [true, 'Image is required.']
    }
})

module.exports = mongoose.model("ingredients", ingredientsSchema);

