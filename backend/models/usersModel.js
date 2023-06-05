const mongoose = require("mongoose")
const bcrypt = require('bcryptjs')



const Schema = mongoose.Schema

const usersSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    semesterplan:{
        type: [],
        required: true
    }

})

// static login method
usersSchema.statics.login = async function(username, password){
    if(!username || !password){
        throw Error('Username and password must be filled')
    }

    const user = await this.findOne({ username })

    if(!user){
        throw Error('This user does not exist')
    }

    //const match = await compare(password, user.password)
    //const passwordMatch = await bcrypt.compare(password, user.password);

    const passwordMatch =  (password === user.password)

    if(!passwordMatch){
        console.log(passwordMatch)
        throw Error('Incorrect password')
    }
    console.log(passwordMatch)
    return user
}

module.exports = mongoose.model("users", usersSchema);

