const express = require('express')
const SemesterPlan = require('../schema/semesterPlansModel')
const { getSemesterPlans, getSemesterPlan, createSemesterPlan, deleteSemesterPlan, updateSemesterPlan } = require('../controllers/semesterPlansControllers')

const router = express.Router()

// GET all semesterplans
router.get('/', getSemesterPlans)


// GET one semesterplan
router.get('/:id', getSemesterPlan)


// POST a new semesterplan
router.post('/', createSemesterPlan)


// DELETE a semesterplan
router.delete('/:id', deleteSemesterPlan)


// UPDATE a semesterplan
router.patch('/:id', updateSemesterPlan)



module.exports = router