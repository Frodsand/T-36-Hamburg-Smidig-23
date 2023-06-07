const express = require('express')
const Lecture = require('../schema/lecturesModel')
const { getLectures, getLecture, createLecture, deleteLecture, updateLecture } = require('../controllers/lectureControllers')

const router = express.Router()

// GET all lectures
router.get('/', getLectures)

// GET one lecture
router.get('/:id', getLecture)

// DELETE a lecture
router.delete('/:id', deleteLecture)

// UPDATE a lecture
router.patch('/:id', updateLecture)


module.exports = router