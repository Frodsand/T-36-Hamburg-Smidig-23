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
                learningOutcome: "I denne undervisningen skal elevene lære om Grunnleggende mataging.Etter å ha fullført denne leksjonen om matlaging, vil elevene kunne: \n 1.Identifisere grunnleggende matlagingsteknikker: Elevene vil kunne gjenkjenne og navngi grunnleggende matlagingsteknikker som kutting, skrelling, røring, knusing, blanding og steking.\n 2. Bruke trygge og hygieniske praksis på kjøkkenet: Elevene vil lære viktigheten av håndvask før matlaging, bruk av forkle og håndklær, og å holde arbeidsområdet rent og ryddig.\n 3. De vil også forstå betydningen av matoppbevaring og bruk av ferske ingredienser.Utføre enkle oppskrifter: Elevene vil kunne lese og forstå enkle oppskrifter ved å følge Utføre enkle oppskrifter: Elevene vil kunne lese og forstå enkle oppskrifter ved å følge, trinnvis veiledning. \n4.De vil utvikle ferdigheter til å måle ingredienser riktig og bruke grunnleggende kjøkkenutstyr som kniver, skjærebrett og målekopper.\n5. Forstå sunne matvaner: Elevene vil bli introdusert for grunnleggende ernæringsprinsipper og oppmuntres til å velge sunne ingredienser og lage balanserte måltider. \n6.De vil lære om viktigheten av å inkludere frukt, grønnsaker og fiberrike matvarer i kostholdet sitt.",
                recipeTitle: "Fruktsalat",
                recipeImage: "acai.png",
                instructions: "1. Vask og skjær ulike frukter i biter.\n 2. Bland alle fruktene i en bolle. \n3. Server og nyt!",
                ingredients: ["Epler", "Pærer", "Bananer", "Appelsiner", "Druer", "Jordbær"]
            },
            {
                category: "Matvaregrupper",
                level: "2",
                title: "Grønnsaker og frukt",
                lectureImage: "matvaregrupperImage.png",
                learningOutcome: "I denne undervisningen skal elevene lære om Matvaregutter. Etter å ha fullført denne leksjonen om matlaging, vil elevene kunne: \n 1.Identifisere grunnleggende matlagingsteknikker: Elevene vil kunne gjenkjenne og navngi grunnleggende matlagingsteknikker som kutting, skrelling, røring, knusing, blanding og steking.\n 2. Bruke trygge og hygieniske praksis på kjøkkenet: Elevene vil lære viktigheten av håndvask før matlaging, bruk av forkle og håndklær, og å holde arbeidsområdet rent og ryddig.\n3. De vil også forstå betydningen av matoppbevaring og bruk av ferske ingredienser.Utføre enkle oppskrifter: Elevene vil kunne lese og forstå enkle oppskrifter ved å følge Utføre enkle oppskrifter: Elevene vil kunne lese og forstå enkle oppskrifter ved å følge, trinnvis veiledning.\n 4. De vil utvikle ferdigheter til å måle ingredienser riktig og bruke grunnleggende kjøkkenutstyr som kniver, skjærebrett og målekopper.\n5. Forstå sunne matvaner: Elevene vil bli introdusert for grunnleggende ernæringsprinsipper og oppmuntres til å velge sunne ingredienser og lage balanserte måltider.\n6. De vil lære om viktigheten av å inkludere frukt, grønnsaker og fiberrike matvarer i kostholdet sitt.",
                recipeTitle: "Grønnsakswraps",
                recipeImage: "wrap.png",
                instructions: "1. Vask og skjær grønnsakene i strimler.\n 2. Varm tortillaene i en panne. \n3. Legg grønnsakene på tortillaene og brett dem sammen. \n4. Server og nyt!",
                ingredients: ["Agurk", "Gulrot", "Tomat", "Paprika", "Salatblader","Tortilla"]
            },
            {
                category: "Ernæring",
                level: "3",
                title: "Meieriprodukter",
                lectureImage: "ernæringImage.png",
                learningOutcome: "I denne undervisningen skal elevene lære om Ernæring. Etter å ha fullført denne leksjonen om matlaging, vil elevene kunne: Identifisere grunnleggende matlagingsteknikker: Elevene vil kunne gjenkjenne og navngi grunnleggende matlagingsteknikker som kutting, skrelling, røring, knusing, blanding og steking.\n 2. Bruke trygge og hygieniske praksis på kjøkkenet: Elevene vil lære viktigheten av håndvask før matlaging, bruk av forkle og håndklær, og å holde arbeidsområdet rent og ryddig. De vil også forstå betydningen av matoppbevaring og bruk av ferske ingredienser.Utføre enkle oppskrifter: Elevene vil kunne lese og forstå enkle oppskrifter ved å følge Utføre enkle oppskrifter: Elevene vil kunne lese og forstå enkle oppskrifter ved å følge, trinnvis veiledning.\n 4.De vil utvikle ferdigheter til å måle ingredienser riktig og bruke grunnleggende kjøkkenutstyr som kniver, skjærebrett og målekopper.\n5. Forstå sunne matvaner: Elevene vil bli introdusert for grunnleggende ernæringsprinsipper og oppmuntres til å velge sunne ingredienser og lage balanserte måltider.\n6. De vil lære om viktigheten av å inkludere frukt, grønnsaker og fiberrike matvarer i kostholdet sitt.",
                recipeTitle: "Mini pizza med fullkornsbunn",
                recipeImage: "mini_pizza.png",
                instructions: "1. Lag fullkornsbunn ved å blande mel, gjær, olivenolje, salt og vann. La deigen heve.\n 2. Kjevle ut deigen og form små pizzaer. \n3. Tilsett ønsket saus og fyll. \n4. Stek i ovnen til osten er smeltet og bunnen er sprø. \n5. Server og nyt!",
                ingredients: ["Hvetemel", "Gjær", "Olivenolje", "Salt", "Vann", "Tomatsaus", "Revet ostst", "Skinke", "Paprika", "Mais", "Sopp"]
            },
            
                {
                "category": "Matvaregrupper",
                "level": "2",
                "title": "Meieriprodukter",
                "lectureImage": "matvaregrupperImage.png",
                "learningOutcome": "I denne leksjonen vil du bli kjent med forskjellige meieriprodukter. Vi skal lære om de sunne fordelene med å inkludere melk, yoghurt og ost i kostholdet vårt. Du vil også oppdage hvorfor kalsium er viktig for å bygge sterke ben og tenner.",
                "recipeTitle": "Fruktig Yoghurtmiks",
                "recipeImage": "yoghurtMix.png",
                "instructions": "1. Finn en skål eller en kopp.\n 2. Hell litt yoghurt i bunnen av beholderen. \n3. Kutt opp ulike frukter som epler, bananer, og druer. \n4. Legg fruktbitene over yoghurten. \n5. Gjenta lagene med yoghurt og frukt til beholderen er full. \n6. Topp det hele med litt honning eller granola for ekstra smak. \n7. Nyt din fruktige yoghurtmiks!",
                "ingredients": ["Yoghurt", "Epler", "Bananer", "Druer", "Honning", "Granola"]
                },

                {
                "category": "Ernæring",
                 "level": "2",
                 "title": "Kornprodukter",
                 "lectureImage": "matvaregrupperImage.png",
                 "learningOutcome": "I denne leksjonen vil du bli kjent med ulike kornprodukter og hvorfor de er en viktig del av et balansert kosthold. Vi skal utforske forskjellige typer korn som havre, ris og brød. Du vil lære om hvordan kornprodukter gir kroppen vår energi og fiber for å holde oss mette og sunne.",
                 "recipeTitle": "Fargerikt Frokostblanding",
                 "recipeImage": "frokostblanding.png",
                 "instructions": "1. Finn en bolle eller et glass.\n 2. Tilsett en blanding av ulike frokostblandinger som havregryn, cornflakes og puffet ris.\n 3. Kutt opp fargerike frukter som jordbær, blåbær og bananer.\n 4. Dryss fruktbitene over frokostblandingen. \n5. Hell melk eller yoghurt over blandingen. \n6. Rør godt og nyt din fargerike frokostblanding!",
                 "ingredients": ["Havregryn", "Cornflakes", "Puffet ris", "Jordbær", "Blåbær", "Bananer", "Melk", "Yoghurt"]
                },
                {
                "category": "Matvaregrupper",
                "level": "2",
                "title": "Proteinkilder",
                "lectureImage": "matvaregrupperImage.png",
                "learningOutcome": "I denne leksjonen vil du lære om forskjellige proteinkilder og hvorfor de er viktige for kroppen vår. Vi skal utforske matvarer som egg, bønner, fisk og kjøtt. Du vil oppdage hvorfor proteiner er nødvendige for å bygge og reparere celler, samt opprettholde en sunn vekst og utvikling.",
                "recipeTitle": "Egg & Grønnsakssmørbrød",
                "recipeImage": "eggSmorbrod.png",
                "instructions": "1. Kok et egg i ca. 8-10 minutter til det er hardkokt.\n 2. Skrell og skjær egget i skiver. \n3. Smør et lag av ditt favorittgrønnsakspålegg på en brødskive. \n4. Legg eggskivene over pålegget. \n5. Legg et lag av ferske grønnsaker som agurk, tomat og salatblader over egget. \n6. Legg en annen brødskive på toppen. \n7. Skjær smørbrødet i to og nyt ditt næringsrike egg- og grønnsakssmørbrød!",
                "ingredients": ["Egg", "Grønnsakspålegg", "Brød", "Agurk", "Tomat", "Salatblader"]
                },
                {
                "category": "Matvaregrupper",
                "level": "3",
                "title": "Sunn Snack: Smoothie Bowl",
                "lectureImage": "matvaregrupperImage.png",
                "learningOutcome": "I denne avanserte leksjonen vil du lære å lage en næringsrik smoothie bowl. Vi vil utforske ulike ingredienser som frukt, grønnsaker og supermat for å lage en deilig og sunn snack. Du vil oppdage hvordan smoothie bowls kan være en flott måte å få i seg viktige næringsstoffer på en morsom og kreativ måte.",
                "recipeTitle": "Supergrønn Smoothie Bowl",
                "recipeImage": "smoothieBowl.png",
                "instructions": "1. I en blender, tilsett en håndfull frisk spinat, en moden banan, en avokado og en kopp frossen mango. \n2. Tilsett en skje med spirulina pulver for ekstra næringsstoffer. \n3. Hell i litt mandelmelk eller annen plantebasert melk for å hjelpe blandingen å blande seg godt. \n4. Blend alt sammen til en jevn og tykk konsistens. \n5. Hell smoothieblandingen i en bolle. \n6. Topp med skivede bær, kokosflak, hakkede nøtter og en teskje chiafrø. \n7. Nyt din supergrønne smoothie bowl!",
                "ingredients": ["Spinat", "Banan", "Avokado", "Mango", "Spirulina pulver", "Mandelmelk", "Bær", "Kokosflak", "Nøtter", "Chiafrø"]
                },
                {
                "category": "Matvaregrupper",
                "level": "2",
                "title": "Fiskeprodukter",
                "lectureImage": "matvaregrupperImage.png",
                "learningOutcome": "I denne leksjonen vil du bli kjent med forskjellige fiskeprodukter og hvorfor de er en viktig del av et sunt kosthold. Vi vil utforske ulike typer fisk som laks, tunfisk og torsk, og lære om fordelene med å inkludere fisk i kostholdet vårt. Du vil også oppdage hvordan fisk er en god kilde til omega-3 fettsyrer som bidrar til en sunn hjernefunksjon og hjerte-helse.",
                "recipeTitle": "Grillet Fisketaco",
                "recipeImage": "grilletFisketaco.png",
                "instructions": "1. Forvarm grillen til middels varme. \n2. Pensle fisken (laks, tunfisk eller torsk) med litt olje og krydre den med salt, pepper og favorittkrydderet ditt. \n3. Grill fisken i ca. 4-6 minutter på hver side, eller til den er gjennomstekt og flaker seg lett med en gaffel. \n4. Varm tortillaene på grillen i noen sekunder på hver side. \n5. Legg den grillet fiskefileten i hver tortilla. \n6. Topp med avokadokrem, finhakket løk, fersk koriander og litt limejuice. 7. Brett tortillaene sammen og nyt dine deilige grillet fisketacoer!",
                "ingredients": ["Fisk (laks, tunfisk eller torsk)", "Olje", "Salt", "Pepper", "Krydder", "Tortilla", "Avokadokrem", "Løk", "Fersk koriander", "Limejuice"]
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