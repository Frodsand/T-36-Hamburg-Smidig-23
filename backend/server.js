require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const path = require('path');

const semesterPlanRoutes = require('./routes/semesterPlans')
const lectureRoutes = require('./routes/lectures')
const userRoutes = require('./routes/users')
const recipeRoutes = require('./routes/recipes')
const learningOutcomeRoutes = require('./routes/learningOutcomes')
const ingredientRoutes = require('./routes/ingredients')

// create express app
const app = express()

// Serve static files from the frontend/build directory
app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

// Serve your API routes or other middleware here

// Route all remaining requests to your React app's index.html file


// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/semesterplans',semesterPlanRoutes)
app.use('/api/lectures',lectureRoutes)
app.use('/api/users', userRoutes)
app.use('/api/recipes', recipeRoutes)
app.use('/api/learningoutcomes', learningOutcomeRoutes)
app.use('/api/ingredients', ingredientRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })


    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'frontend', 'public', 'index.html'));
    });

//process.env