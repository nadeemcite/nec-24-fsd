import express, {Request, Response} from 'express'
import {getConnection} from './dbconfig'

export const app = express()


app.get("/", (req: Request, res: Response) => {
    res.send("Hello")
})

app.get("/a", async (req: Request, res: Response)=>{
    
    try {
        const connection = await getConnection()
        const [results, fields] = await connection.query(
          'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45'
        );
      
        console.log(results); // results contains rows returned by server
        console.log(fields); // fields contains extra meta data about results, if available
      } catch (err) {
        console.log(err);
      }
    res.send("A called")
})

// a url that creates a table person (name, age, phone)

/**
 * create table person(
 *  name varchar(100),
 *  age int,
 *  phone varchar(10)
 * )
 */

app.get("/createtable", async (req: Request, res: Response)=>{
    try{
        const connection = await getConnection()
        await connection.query(`
            create table if not exists person(
              name varchar(100),
              age int,
              phone varchar(10)
            )
        `)
        res.send("Table Created")
    }catch(err){
        console.log("Error raised")
        console.log(err)
        res.send("Table cannot be created")
    }
})
// http://localhost:8080/insertintable?name=Amit'&age=18&phone=6367474
app.get("/insertintable", async (req:Request, res:Response)=>{
    try{
        // SQLInjection Example


        // const name = req.query.name;
        // const age = req.query.age;
        // const phone = req.query.phone;

        const {name, age, phone} = req.query

        const connection = await getConnection()
        const query = `
            insert into person(name, age, phone)
            values('${name}',${age}, '${phone}')
        `
        console.log(query)
        await connection.query(query)
        res.send("Query was executed")
    }catch(err){
        console.log("Error raised")
        console.log(err)
        res.send("Query could not be executed")
    }
})

// http://localhost:8080/insertintable2?name=Amit'&age=18&phone=6367474
app.get("/insertintable2", async (req:Request, res:Response)=>{
    try{
        // Without SQLInjection Example

        const {name, age, phone} = req.query

        const connection = await getConnection()
        const query = `
            insert into person(name, age, phone)
            values(?,?,?)
        `
        console.log(query)
        await connection.query(query, [name, age, phone])
        res.send("Query was executed")
    }catch(err){
        console.log("Error raised")
        console.log(err)
        res.send("Query could not be executed")
    }
})

app.get("/fetchallrows", async (req:Request, res:Response)=>{
    try{
        const connection = await getConnection()
        const [result] = await connection.query(`
            select * from person
        `)
        res.send(result)
    }catch(err){
        console.log("Error raised")
        console.log(err)
        res.send("Query could not be executed")
    }
})

app.get("/delete", async (req:Request, res:Response)=>{
    try{
        const {name} = req.query
        const connection = await getConnection()
        await connection.query(`
            delete from person
            where name=?
        `, [name])
        res.send("Deleted Person")
    }catch(err){
        console.log("Error raised")
        console.log(err)
        res.send("Query could not be executed")
    }
})

// ORM : Object Relational Mapping