import supertest from 'supertest'
import {app} from './app'

describe("test suite for app", ()=>{
    test("test default path", async ()=>{
        const resp = await supertest(app).get("/")
        expect(resp.status).toBe(200)
        expect(resp.text).toBe("Hello World")
    })

    test("correct value is returned for temperature endpoint", async ()=>{
        const resp = await supertest(app).get("/temperature?c=-40")
        expect(resp.status).toBe(200)
        expect(resp.text).toBe("-40")
    })

    test("error raised for temperature endpoint at non numeric values", async ()=>{
        const resp = await supertest(app).get("/temperature?c=abc")
        expect(resp.status).toBe(500)
    })
})