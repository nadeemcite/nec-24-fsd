import supertest from 'supertest'
import {app} from './app'

beforeAll(()=>{
    // This is going to run only once, initially
    console.log("DB CONFIGURED")
})

beforeEach(()=>{
    // for all the tests
    console.log("ADD SOME SAMPLE DATA")
})

afterAll(()=>{
    // This is going to run only once, at the end
    console.log("DB Closed")
})

describe("test suite for profile api", ()=>{
    test("it should create a profile 1",async ()=>{
        console.log("Test1 running")
        expect(4+5).toBe(9)
    })

    test("it should create a profile 2",async ()=>{
        console.log("Test2 running")
        expect(5-10).toBe(9)
    })
})

