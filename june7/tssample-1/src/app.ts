// js method => const express = require('express')

import express, {Request, Response} from 'express'
import {convertCtoF} from './temperature'

export const app = express()

app.get("/", (req:Request, res: Response)=>{
    res.send("Hello World")
})

app.get("/temperature", (req: Request, res: Response)=>{
    const c = parseFloat(req.query.c as string)
    if(isNaN(c)){
        res.sendStatus(500)
    }else{
        res.send(convertCtoF(c).toString())
    }
})