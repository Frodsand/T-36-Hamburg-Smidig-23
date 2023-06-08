require('dotenv').config()
const mongoose = require('mongoose');
const usersModel = require('../schema/usersModel')

const url = process.env.MONGO_URI

mongoose.connect(url).then(()=> {
    console.log('Connected to Mongodb')

    createUserDocuments()
})

async function createUserDocuments(){
    try{
        const usersDocuments = [
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