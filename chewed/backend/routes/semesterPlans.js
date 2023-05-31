const express = require('express')

const router = express.Router()

// GET all semesterplans
router.get('/', (req, res) => {
    res.json({mssg: 'GET all semesterplans'})
})

// GET one semesterplan
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single semesterplan'})
})

// POST a new semesterplan
router.post('/', (req, res) => {
    res.json({mssg: 'POST a single semesterplan'})
})

// DELETE a semesterplan
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single semesterplan'})
})

// UPDATE a semesterplan
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a semesterplan'})
})


module.exports = router