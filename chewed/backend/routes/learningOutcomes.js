const express = require('express')

const router = express.Router()

// GET all learning outcomes
router.get('/', (req, res) => {
    res.json({mssg: 'GET all learning outcomes'})
})

// GET one learning outcome
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single learning outcome'})
})

/*// POST a new semesterplan
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
}) */


module.exports = router