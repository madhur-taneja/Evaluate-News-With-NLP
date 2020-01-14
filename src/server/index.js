// Setting up the Environment Variables
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Including the aylien api
var aylien = require("aylien_textapi");

// Setting up the credentials for the api
var textapi = new aylien({
    application_id: { application_id: process.env.API_ID},
    application_key: { application_key: process.env.API_KEY}
});