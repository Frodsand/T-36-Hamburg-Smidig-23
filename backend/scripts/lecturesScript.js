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
                lectureImage: "gryndleggendeImage.jpg",
                learningOutcome: "I denne leksjonen vil du lære hvorfor det er viktig å spise sunn mat. Vi vil utforske hvordan sunn mat gir næring til kroppen din, holder deg frisk og energisk, og hjelper deg med å vokse og utvikle deg på best mulig måte.",
                recipeTitle: "Fruktsalat",
                recipeImage: "frukt_salat.jpg",
                instructions: "1. Vask og skjær ulike frukter i biter. 2. Bland alle fruktene i en bolle. 3. Server og nyt!",
                ingredients: ["Epler", "Pærer", "Bananer", "Appelsiner", "Druer", "Jordbær"]
            },
            {
                category: "Matvaregrupper",
                level: "2",
                title: "Introduksjon til sunn matlaging",
                lectureImage: "matvaregrupperImage.png",
                learningOutcome: "I denne leksjonen vil du bli kjent med forskjellige grønnsaker og frukt. Vi vil utforske fargerike grønnsaker som gulrøtter, grønne grønnsaker som brokkoli, og saftige frukter som epler og appelsiner. Du vil lære om hvorfor det er bra for kroppen din å spise ulike typer grønnsaker og frukt hver dag.",
                recipeTitle: "Grønnsakswraps",
                recipeImage: "Wrap.jpg",
                instructions: "1. Vask og skjær grønnsakene i strimler. 2. Varm tortillaene i en panne. 3. Legg grønnsakene på tortillaene og brett dem sammen. 4. Server og nyt!",
                ingredients: ["Agurk", "Gulrot", "Tomat", "Paprika", "Salatblader","Tortilla"]
            },
            {
                category: "Ernæring",
                level: "3",
                title: "Meieriprodukter",
                lectureImage: "ernæringImage.png",
                learningOutcome: "I denne leksjonen vil du lære om forskjellige typer kornprodukter, som brød, pasta, ris og havregryn. Vi vil snakke om hvorfor kornprodukter er en viktig kilde til energi for kroppen din, og hvordan de kan være en del av et balansert kosthold.",
                recipeTitle: "Mini pizza med fullkornsbunn",
                recipeImage: "mini_pizza.jpg",
                instructions: "1. Lag fullkornsbunn ved å blande mel, gjær, olivenolje, salt og vann. La deigen heve. 2. Kjevle ut deigen og form små pizzaer. 3. Tilsett ønsket saus og fyll. 4. Stek i ovnen til osten er smeltet og bunnen er sprø. 5. Server og nyt!",
                ingredients: ["Hvetemel", "Gjær", "Olivenolje", "Salt", "Vann", "Tomatsaus", "Revet ostst", "Skinke", "Paprika", "Mais", "Sopp"]
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