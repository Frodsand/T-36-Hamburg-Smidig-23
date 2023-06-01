const LearningOutcomesModel = require("../models/learningOutcomesModel")
const mongoose = require('mongoose')

// GET all learningOutcomes
const getLearningOutcomes = async (req, res) => {
  const learningOutcomes = await LearningOutcomesModel.find({})

  res.status(200).json(learningOutcomes)
}

// GET one learningOutcome
const getLearningOutcome = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No learningOutcome with that id" })
  }

  const learningOutcome = await LearningOutcomesModel.findById(id)

  if (!learningOutcome) {
    return res.status(404).json({ error: "No learningOutcome with that id" })
  }

  res.status(200).json(learningOutcome)
}

// POST a new learningOutcome
const createLearningOutcome = async (req, res) => {
    const {category, description, level} = req.body

    // add to the database
    try {
        const learningOutcome = await LearningOutcomesModel.create({category, description, level})
        res.status(200).json(learningOutcome)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// DELETE a learningOutcome
const deleteLearningOutcome = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No learningOutcome with that id" })
    }

    const learningOutcome = await LearningOutcomesModel.findByIdAndDelete({ _id: id })

    if (!learningOutcome) {
        return res.status(404).json({ error: "No learningOutcome with that id" })
    }

    res.status(200).json(learningOutcome)
}

// UPDATE a learningOutcome
const updateLearningOutcome = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No learningOutcome with that id" })
    }

    const learningOutcome = await LearningOutcome.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!learningOutcome) {
        return res.status(404).json({ error: "No learningOutcome with that id" })
    }

    res.status(200).json(learningOutcome)
}

module.exports = {
    getLearningOutcomes,
    getLearningOutcome,
    createLearningOutcome,
    deleteLearningOutcome,
    updateLearningOutcome
};