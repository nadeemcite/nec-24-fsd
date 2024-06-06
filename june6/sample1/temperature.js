/**
 * F = (c*9/5) + 32
 */

const celciusToFarenheit = (celcius)=>{
    if (typeof celcius !== 'number' || isNaN(celcius)){
        throw new Error("celciusToFarenheit only expects number")
    }
    return (celcius * 9 / 5) + 32
}

module.exports = celciusToFarenheit