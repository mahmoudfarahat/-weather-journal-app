/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();






//  Weather Api Key  from the website 

const weatherApiKey = "0839f75e24c640ac6382da316168812d"


const gettingbtn = document.querySelector("#generate")
// adding an event when i click the button 
gettingbtn.addEventListener("click", async () =>{
    //get zip code value from the input 
    const myzipCode = document.querySelector('#zip').value
    //feeling 
    const feelingContent = document.querySelector("#feelings").value
    // API URl
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${myzipCode}&appid=${weatherApiKey}&units=metric`
try{
// fetch the data
const res = await fetch(apiUrl)
// change the buffer into data
const myData = await res.json()
// temp 
const temperature = myData.main.temp
 


// saving data to the server
await fetch ('/saveAllData' , {
    method: "POST",
    credentials: "same-origin",
    headers:{
        "content-type":"application/json"
    },

    // saving data and turn it into string "{ date:newDate , .......}"
    body: JSON.stringify({
        date: newDate,
        temp: temperature,
        content: feelingContent
    })




} )
// getting data from the server

const dataResponse = await fetch("/getAllData" , {
    method: "GET",
    credentials: "same-origin"
})
// parse data into json 
const finalData = await dataResponse.json()
console.log(finalData)

// handling error messages
}catch(err){
    console.log(err )
}

})