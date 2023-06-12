require('dotenv').config()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose');
const usersModel = require('../schema/usersModel')

const url = process.env.MONGO_URI

mongoose.connect(url).then(()=> {
    console.log('Connected to Mongodb')

    createUserDocuments()
})

async function createUserDocuments(){
    try{
        let usersDocuments = [
            {
                username: "myUsername",
                password: "myPassword"
            }
        ];

        const collectionCount = await usersModel.countDocuments()

        if(collectionCount === usersDocuments.length){
            console.log('Collection (user) already has objects. Skipping insertion.')
            return;
        }

        await usersModel.collection.drop();

        // hashing password before inserting it to db

        usersDocuments = await Promise.all(usersDocuments.map(async (user) => {
            const salt = await bcrypt.genSalt(10)
            user.password = await bcrypt.hash(user.password, salt);
            return user
        }))

        const result = await usersModel.insertMany(usersDocuments)
        console.log('Inserted user to lectureDB', result);
    } catch (error){
        console.error('Error', error)
    } finally {
        //Disconect from MongoDB after the operation
       // mongoose.disconnect()
    }
}

module.exports = {createUserDocuments}