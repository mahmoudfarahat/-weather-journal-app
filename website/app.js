/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();






//  Weather Api Key 

const weatherApiKey = "0839f75e24c640ac6382da316168812d"


const gettinbtn = document.querySelector("#generate")

gettinbtn.addEventListener("click", async () =>{

    const myzipCode = document.querySelector('#zip').value
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${myzipCode}&appid=${weatherApiKey}&units=metric`
// fetch the data
const res = await fetch(apiUrl)
// change the buffer into data
const myData = await res.json()
// temp 
const temperature = myData.main.temp
 
})

// API URl

