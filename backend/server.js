require('dotenv').config()

const cors = require('cors');


const express = require('express')
const mongoose = require('mongoose')
const path = require('path');

const createLectureCollectionAndDocumets = require('./scripts/lecturesScript')
const createUsersDocuments = require('./scripts/usersScript')

const lectureRoutes = require('./routes/lectures')
const userRoutes = require('./routes/users')
const loginRoutes = require('./routes/login')


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

app.use(cors());

// routes
app.use('/api/lectures',lectureRoutes)
app.use('/api/users', userRoutes)
app.use('/api/login', loginRoutes)


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