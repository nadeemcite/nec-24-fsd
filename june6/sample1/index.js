//express

const express = require("express")
const cors = require("cors")
const celciusToFarenheit = require("./temperature")

const app = express()

app.use(cors())

app.get("/", (req, res)=>{
    console.log("THIS FUNCTION WAS CALLED")
    res.send("Hello")
})

app.get("/a", (req, res)=>{
    console.log("THAT FUNCTION WAS CALLED")
    res.send("Bye")
})

app.get("/temperature", (req, res)=>{
    const celcius = parseFloat(req.query.c)
    const val = celciusToFarenheit(celcius)
    setTimeout(()=>{
        res.send(val.toString())
    }, 2000)
})

module.exports = app