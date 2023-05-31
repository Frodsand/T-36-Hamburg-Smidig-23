const Ingredient = require('../models/ingredientsModel');
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

// GET one ingredient
const getIngredient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    const ingredient = await Ingredient.findById(id);

    if(!ingredient){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    res.status(200).json(ingredient);
}

// POST a new ingredient
const createIngredient = async (req, res) => {
    const {name, quantity, price, image} = req.body;

    // add to the database
    try{
        const ingredient = await Ingredient.create({name, quantity, price, image});
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

// DELETE a ingredient
const deleteIngredient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    const ingredient = await Ingredient.findByIdAndDelete({_id: id});

    if(!ingredient){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    res.status(200).json(ingredient)
}

// UPDATE a ingredient
const updateIngredient = async (req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    const ingredient = await Ingredient.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!ingredient){
        return res.status(404).json({error: 'No ingredient with that id'});
    }

    res.status(200).json(ingredient);
}

module.exports = {
    getIngredients,
    getIngredient,
    createIngredient,
    deleteIngredient,
    updateIngredient
}