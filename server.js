// Setup empty JS object to act as endpoint for all routes
projectData = {};


// Require Express to run server and routes
const express = require('express')
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')
// Start up an instance of app
const app = express()
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors())

app.post("/saveAllData" , (req, res) =>{
    //using spread operator to save all data into the object
    projectData = {...req.body}
    res.send()
})

app.get("/getAllData" , (req, res) => {
    res.send(projectData)
} )
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
app.listen(port, ()=>{
    console.log(`Running on locolhost:${port}`)
})