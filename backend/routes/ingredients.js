const express = require('express')
const ingredients = require('../models/ingredientsModel')

const router = express.Router()

// GET all ingredients
router.get('/', (req, res) => {
    res.json({mssg: 'GET all ingredients'})
})

// GET one ingredient
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single ingredient'})
})

// POST a new ingredient
router.post('/', async (req, res) => {
    const {name, quantity, price, image} = req.body

    try {
        const ingredient = await ingredients.create({name, quantity, price, image})
        res.status(200).json(ingredient)
    } catch (error){
        res.status(400).json({error: error.message})
    }

   // res.json({mssg: 'POST a single ingredient'})
})

// DELETE a ingredient
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single ingredient'})
})

// UPDATE a ingredient
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a ingredient'})
})


module.exports = router