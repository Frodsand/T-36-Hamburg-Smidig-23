const express = require('express')
const ingredients = require('../schema/ingredientsModel')
const { getIngredients, getIngredient, createIngredient, deleteIngredient, updateIngredient, createDocuments} = require('../controllers/ingredientsControllers')

const router = express.Router()

// GET all ingredients
router.get('/', getIngredients)

// GET one ingredient
router.get('/:id', getIngredient)

// POST a new ingredient
//router.post('/', createIngredient)

// POST document to collection
//router.post('/', createDocuments)

// DELETE a ingredient
router.delete('/:id', deleteIngredient)

// UPDATE a ingredient
router.patch('/:id', updateIngredient)


module.exports = router