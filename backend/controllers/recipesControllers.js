const Recipe = require('../models/recipesModel');
const mongoose = require('mongoose');

// GET all recipes
const getRecipes = async (req, res) => {
    const recipes = await Recipe.find({});

    res.status(200).json(recipes);
}

// GET one recipe
const getRecipe = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No recipe with that id'});
    }

    const recipe = await Recipe.findById(id);

    if(!recipe){
        return res.status(404).json({error: 'No recipe with that id'});
    }

    res.status(200).json(recipe);
}

// const recipesSchema = new Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     instructions: {
//         type: String,
//         required: true
//     },
//     ingredients: [{
//         name: {
//         type: String,
//         required: true
//         },
//         amount: {
//             type: Number,
//             required: true
//         },
//         unit: {
//             type: String,
//             required: true
//         }
//     }],
//     allergies: {
//         type: [],
//     },
//     image: {
//         type: String,
//         required: true
//     }
// })

//createRecipe(name, description)

// POST and create a new recipe
const createRecipe = async (req, res) => {
    const {name, description, instructions, ingredients, image} = req.body;

    // add to the database
    try{
        const recipe = await Recipe.create ({name, description, instructions, ingredients, name, amount, unit, image});
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// DELETE a recipe
const deleteRecipe = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No recipe with that id'});
    }

    const recipe = await Recipe.findByIdAndDelete({_id: id});

    if(!recipe){
        return res.status(404).json({error: 'No recipe with that id'});
    }

    res.status(200).json(recipe)
}

// UPDATE a recipe
const updateRecipe = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No recipe with that id'});
    }

    const recipe = await Recipe.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!recipe){
        return res.status(404).json({error: 'No recipe with that id'});
    }

    res.status(200).json(recipe);
}

module.exports = {
    getRecipes,
    getRecipe,
    createRecipe,
    deleteRecipe,
    updateRecipe
};