import express, {Request, Response} from 'express'
import {AppDataSource, Person} from './dbconfig'

export const app = express()

app.get("/", (req:Request, res:Response)=>{
    res.send("Hello")
})


app.get("/checkdb", (req:Request, res:Response)=>{
    console.log(AppDataSource)
    res.send("DB configured")
})


app.get('/insertintable', (req:Request, res:Response)=>{
    const person = new Person()
    person.name = "Amit"
    person.age = 16
    person.phone = "72787488"
    // uptil here this person is created in primary memory
    AppDataSource.getRepository(Person).save(person)
    res.send(person)
})

app.get("/fetchall", async (req:Request, res:Response)=>{
    const repository = AppDataSource.getRepository(Person)
    const persons = await repository.find({})
    res.send(persons)
})