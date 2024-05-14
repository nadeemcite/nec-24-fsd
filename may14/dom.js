const massInputBox = document.getElementById("mass");
const heightInputBox = document.getElementById("height");
const result = document.getElementById("result");
const errors = document.getElementById("errors");
const clock = document.getElementById("clock");

const validateInput = () =>{
    result.innerText = ""
    errors.innerText = ""
    if (massInputBox.value === ""){
        errors.innerText = "Please provide Mass"
        return false
    }else if(!/\d+/.test(massInputBox.value)){
        errors.innerText = "Please provide valid Mass in kgs"
        return false
    }
    if (heightInputBox.value === ""){
        errors.innerText = "Please provide Height"
        return false
    }else if(!/\d+/.test(heightInputBox.value)){
        errors.innerText = "Please provide valid height in cms"
        return false
    }
    return true
}

const calculateBMI = () =>{
    const mass = parseFloat(massInputBox.value)
    const height = parseFloat(heightInputBox.value)
    
    
    const bmi = mass/ (height/100)**2
    
    if (bmi < 18.5){
        result.innerText = "You are underweight"
    }else if (bmi < 25){
        result.innerText = "You have normal BMI"
    }else if (bmi < 30){
        result.innerText = "You are over weight"
    }else {
         result.innerText = "You are over obese"
    }
}
let clockCounter = 0
const updateClock = () =>{
    clock.innerHTML = clockCounter
    clockCounter++
}

setInterval(updateClock, 1000)

const welcomeMessage = () => {
    alert("Welcome")
}

setTimeout(welcomeMessage, 1000)