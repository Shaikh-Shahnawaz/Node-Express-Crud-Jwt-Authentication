const express = require('express')
require('dotenv').config()
const cors = require('cors')
const userRoutes = require("./routes/userRoutes")
const employeeRoutes = require('./routes/employeeRoutes')
const { centralErrorHandler } = require('./controllers/centralError')

const app = express()

// app level middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// route middleware
app.use("/api/employee",employeeRoutes)
app.use("/api/authentication",userRoutes)

// central error handler middleware
app.use(centralErrorHandler)

module.exports = app