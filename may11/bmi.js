mass = parseFloat(prompt("Enter you mass in Kg?"))
height = parseFloat(prompt("Enter you height in cm?"))


bmi = mass/ (height/100)**2

if (bmi < 18.5){
    alert("You are underweight")
}else if (bmi < 25){
    alert("You have normal BMI")
}else if (bmi < 30){
    alert("You are over weight")
}else {
     alert("You are over obese")
}