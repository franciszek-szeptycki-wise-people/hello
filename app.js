// Import the express library
const express = require('express')

// Create a new express application
const app = express()

// Define the route for "/"
app.get('/', (req, res) => {
    res.send('Hello, World!')
})

// Start the application on port 3000
app.listen(3000, () => {
    console.log('Express application started on http://localhost:3000')
})
