const express = require('express')
const Recipe = require('../models/recipesModel')

const router = express.Router()

// GET all recipes
router.get('/', (req, res) => {
    res.json({mssg: 'GET all recipes'})
})

// GET one recipe
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single recipe'})
})

 // POST a new recipe
router.post('/', (req, res) => {
    res.json({mssg: 'POST a single recipe'})
})

// DELETE a recipe
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single recipe'})
})

// UPDATE a recipe
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a recipe'})
})


module.exports = router