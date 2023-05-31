const Ingredient = require('../models/ingredientModel');
const  mongoose = require('mongoose');

// GET all ingredients
const getIngredients = async (req, res) => {
   await Ingredient.find()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            res.status(404).json({message: err.message});
        })
}