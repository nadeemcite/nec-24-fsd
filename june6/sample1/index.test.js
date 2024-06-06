const supertest = require("supertest")
const app = require("./index")

describe("test suite for app", ()=>{
    test("test default path", async ()=>{
        const resp = await supertest(app).get("/")
        expect(resp.status).toBe(200)
        expect(resp.text).toBe("Hello")
    })
    
    test("test /a", async ()=>{
        const resp= await supertest(app).get("/a")
        expect(resp.status).toBe(200)
        expect(resp.text).toBe("Bye")
    })
    
    test("test /temperature", async ()=>{
        const resp= await supertest(app).get("/temperature?c=10")
        expect(resp.status).toBe(200)
        expect(resp.text).toBe("50")
    })
    
    test("test /temperature", async ()=>{
        const resp= await supertest(app).get("/temperature?c=a")
        expect(resp.status).toBe(500)
    })
})


/**
 * 200-299 -> OK
 * 300-399 -> Redirection
 * 400-499 -> Something wrong from client end
 * 500- > Something wrong at server
 */

// 404 not found