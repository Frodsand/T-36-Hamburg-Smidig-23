require('dotenv').config()
const mongoose = require("mongoose");
const ingredientsModel = require("../backend/schema/ingredientsModel");

const url = process.env.MONGO_URI

mongoose.connect(url).then(()=>{
    console.log("Connected to Mongodb")

    createCollectionAndDocuments()
})

async function createCollectionAndDocuments(){
    try{
        const documents = [
            {
                name: 'Green Cucumber',
                quantity: 5,
                price: 20,
                image: 'GreenCucumber.png'
            },
            {
                name: 'Yellow tomato',
                quantity: '5',
                price: '35',
                image: 'yellowtomato.png'
            },
            {
                name: 'Red tomato',
                quantity: '5',
                price: '35',
                image: 'redtomato.png'
            },
            {
                name: 'Green tomato',
                quantity: '5',
                price: '35',
                image: 'greentomato.png'
            },
            {
                name: 'Banana',
                quantity: '1',
                price: '10',
                image: 'banana.png'
            },
            {
                name: 'Mini Banana',
                quantity: '1',
                price: '10',
                image: 'minibanana.png'
            },
            {
                name: 'Big Banana',
                quantity: '1',
                price: '10',
                image: 'bigbanana.png'
            }
        ];

        const collectionCount = await ingredientsModel.countDocuments();

        if( collectionCount === documents.length){
            console.log('Collection already has objects. Skipping insertion.')
            return;
        }

        await ingredientsModel.collection.drop()

        const result = await ingredientsModel.insertMany(documents)
        console.log('Inserted to db', result);

    } catch (err){
        console.error('Error', err)
    } finally {
        //Disconect from MongoDB after the operation
        mongoose.disconnect()
    }
}

//createCollectionAndDocuments();
module.exports = {createCollectionAndDocuments}





/* // Import the MongoDB Node.js driver
const { MongoClient } = require('mongodb');
const dbName = 'chewed';

const url = process.env.MONGO_URI

const client = new MongoClient(url);

async function createCollectionAndDocuments(){
    try{
        await client.connect();

        // Access the db
        const db = client.db(dbName)

        //Create ingredient collection
        const collectionName = 'ingredients';

        await db.dropCollection(collectionName)

        const collection = db.collection(collectionName)

        const documents = [
            {
                name: 'Green Cucumber',
                quantity: 5,
                price: 20,
                image: 'GreenCucumber.png'
            },
            {
                name: 'Yellow tomato',
                quantity: '5',
                price: '35',
                image: 'yellowtomato.png'
            },
            {
                name: 'Red tomato',
                quantity: '5',
                price: '35',
                image: 'redtomato.png'
            }
        ];

        const result = await collection.insertMany(documents)

        console.log('Inserted to db', result);
    } catch (err){
        console.error('Error', err)
    } finally {
        await client.close()
    }
}

//createCollectionAndDocuments();
module.exports = {createCollectionAndDocuments} */