const express = require('express')
const LearningOutcome = require('../models/learningOutcomesModel')
const { getLearningOutcomes, getLearningOutcome, createLearningOutcome, deleteLearningOutcome, updateLearningOutcome } = require('../controllers/learningOutcomesControllers')

const router = express.Router()

// GET all learning outcomes
router.get('/', getLearningOutcomes)

// GET one learning outcome
router.get('/:id', getLearningOutcome)

// POST a new semesterplan
router.post('/', createLearningOutcome)

// DELETE a semesterplan
router.delete('/:id', deleteLearningOutcome)

// UPDATE a semesterplan
router.patch('/:id', updateLearningOutcome)


module.exports = router