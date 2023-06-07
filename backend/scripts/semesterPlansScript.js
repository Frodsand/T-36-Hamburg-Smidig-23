require('dotenv').config()
const mongoose = require('mongoose');
const semesterPlansModel = require('../schema/semesterPlansModel')

const url = process.env.MONGO_URI

mongoose.connect(url).then(()=> {
    console.log('Connected to Mongodb')

    createSemesterPlanDocuments()
})

async function createSemesterPlanDocuments(){
    try{
        const semesterPlansDocuments = [
            title: {
                type: String,
                required: true
            },
                lectureID: {
                    type: []
            },
            userId: {
                type: String,
            }
        ]
    }
}