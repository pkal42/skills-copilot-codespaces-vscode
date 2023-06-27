// Create web server
const express = require('express')
const app = express()
const port = 3000
// import mongoose
const mongoose = require('mongoose')
// import model
const Comment = require('./models/comment')
// import body-parser
const bodyParser = require('body-parser')
// import method-override
const methodOverride = require('method-override')
// setting template engine
app.set('view engine', 'pug')
// setting static files
app.use(express.static('public'))
// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// setting method-override
app.use(methodOverride('_method'))
// connect to mongodb
mongoose.connect('mongodb://localhost/comment', { useNewUrlParser: true, useUnifiedTopology: true })