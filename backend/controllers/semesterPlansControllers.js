const SemesterPlans = require("../schema/semesterPlansModel.js")
const mongoose = require('mongoose')

// GET all semesterPlans
const getSemesterPlans = async (req, res) => {
    const semesterPlans = await SemesterPlans.find({})

    res.status(200).json(semesterPlans)
}

// GET one semesterPlan
const getSemesterPlan = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    const semesterPlan = await SemesterPlans.findById(id)

    if (!semesterPlan) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    res.status(200).json(semesterPlan)
}

// POST a new semesterPlan
const createSemesterPlan = async (req, res) => {
    const {name, lecture, user} = req.body

    // add to the database
    try {
        const semesterPlan = await SemesterPlans.create({name, lecture, user})
        res.status(200).json(semesterPlan)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// DELETE a semesterPlan
const deleteSemesterPlan = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    const semesterPlan = await SemesterPlans.findByIdAndDelete({ _id: id })

    if (!semesterPlan) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    res.status(200).json(semesterPlan)
}

// UPDATE a semesterPlan
const updateSemesterPlan = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    const semesterPlan = await SemesterPlans.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!semesterPlan) {
        return res.status(404).json({ error: "No semesterPlan with that id" })
    }

    res.status(200).json(semesterPlan)
}

module.exports = {
    getSemesterPlans,
    getSemesterPlan,
    createSemesterPlan,
    deleteSemesterPlan,
    updateSemesterPlan
};