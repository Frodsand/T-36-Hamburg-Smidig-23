require('dotenv').config()
const mongoose = require('mongoose');
const lecturesModel = require('../schema/lecturesModel')

const url = process.env.MONGO_URI

mongoose.connect(url).then(()=> {
    console.log('Connected to Mongodb')

    createLectureDocuments()
})

async function createLectureDocuments(){
    try{
        const lecturesDocuments = [

            {
                category: "Grunnleggende",
                level: "1",
                title: "Introduksjon til sunn matlaging",
                lectureImage: "lectureImage.png",
                learningOutcome: "I denne leksjonen vil du lære hvorfor det er viktig å spise sunn mat. Vi vil utforske hvordan sunn mat gir næring til kroppen din, holder deg frisk og energisk, og hjelper deg med å vokse og utvikle deg på best mulig måte.",
                recipeTitle: "test",
                recipeImage: "test",
                instructions: "test",
                ingredients: "test"
            }
        ];

        const collectionCount = await lecturesModel.countDocuments()

        if(collectionCount === lecturesDocuments.length){
            console.log('Collection (lecture) already has objects. Skipping insertion.')
            return;
        }

        await lecturesModel.collection.drop();

        const result = await lecturesModel.insertMany(lecturesDocuments)
        console.log('Inserted to lectureDB', result);
    } catch (error){
        console.error('Error', error)
    }finally{
        //mongoose.disconnect()
    }
}

module.exports = {createLectureDocuments}