const mongoose = require("mongoose")
const bcrypt = require('bcrypt')

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
    }
})

// static login method
usersSchema.statics.login = async function(username, password){

    if(!username || !password){
        throw Error('Username and password must be filled')
    }

    const user = await this.findOne({ username })

    if (!user) {
        throw Error('Incorrect username')
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if(!passwordMatch){
        throw Error('Incorrect password')
    }

    return user
}

module.exports = mongoose.model("users", usersSchema);

