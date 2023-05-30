// Import the necessary modules
const request = require('supertest')
const express = require('express')

// Create a simple Express app
const app = express()
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

describe('GET /', function () {
    it('responds with Hello, World!', function (done) {
        // The line below is the core test
        request(app).get('/').expect('Hello, World!', done) // .expect checks the HTTP status code, headers, and body.
    })
})
