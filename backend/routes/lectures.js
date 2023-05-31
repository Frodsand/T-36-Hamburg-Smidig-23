const express = require('express')

const router = express.Router()

// GET all lectures
router.get('/', (req, res) => {
    res.json({mssg: 'GET all lectures'})
})

// GET one lecture
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single lecture'})
})

// POST a new lecture
router.post('/', (req, res) => {
    res.json({mssg: 'POST a single lecture'})
})

// DELETE a lecture
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a single lecture'})
})

// UPDATE a lecture
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a lecture'})
})


module.exports = router