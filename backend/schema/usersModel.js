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

const usersSchema = new Schema({
    username: {
        type: String,
        required: [true, 'username is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    semesterplan:{
        type: []
    }

})

module.exports = mongoose.model("users", usersSchema);

