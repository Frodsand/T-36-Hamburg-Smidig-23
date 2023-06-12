const express = require('express')
const Lecture = require('../schema/lecturesModel')
const { getLectures, getLecture, createLecture, deleteLecture, updateLecture } = require('../controllers/lectureControllers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require authentication for all lecture routes
router.use(requireAuth)

// GET all lectures
router.get('/', getLectures)

// GET one lecture
router.get('/:id', getLecture)

// DELETE a lecture
router.delete('/:id', deleteLecture)

// UPDATE a lecture
router.patch('/:id', updateLecture)


module.exports = router