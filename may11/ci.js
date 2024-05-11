principle = 5000
rate = 5
time = 3

compundInterest = principle * (1+rate/100)**time

// after 3 years, the compund interest for rs 5000 at a rate of 5 % is ....

console.log(`after ${time} years, the compund interest for rs ${principle} at a rate of ${rate} % is ${compundInterest.toFixed(2)}`)
