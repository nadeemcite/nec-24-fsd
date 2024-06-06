const celciusToFarenheit = require("./temperature")

describe("test suite for temperature.js", ()=>{
    test("test the temperature with 0 degree celcius", ()=>{
        // 0 celcius = 32 F
        const val = celciusToFarenheit(0)
        expect(val).toBe(32)
    
        // expect(celciusToFarenheit(0)).toBe(32) 
    })
    
    test("test the temperature at 100 celcius", ()=>{
        expect(celciusToFarenheit(100)).toBe(212) 
    })
    
    test("test the temperature at -40 celcius", ()=>{
        // -40C = -40F
        expect(celciusToFarenheit(-40)).toBe(-40) 
    })
    
    test("test the temperature with a non numeric value", ()=>{
        /**
         * This does not work because calling celciusToFarenheit('a') raises an error
         */
        // expect(celciusToFarenheit('a')).toThrow("celciusToFarenheit only expects number")
    })
    test("test the temperature with a non numeric value and handling the error", ()=>{
        expect(()=>{
            celciusToFarenheit('a').toThrow("celciusToFarenheit only expects number")
        })
    })
    
    
    test("test the temperature with NaN", ()=>{
        expect(()=>{
            celciusToFarenheit(parseFloat("mnn")).toThrow("celciusToFarenheit only expects number")
        })
    })
    
})

