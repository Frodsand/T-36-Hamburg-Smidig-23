const express = require('express')

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
router.post('/', (req, res) => {

    res.json({mssg: 'POST a single ingredient'})
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