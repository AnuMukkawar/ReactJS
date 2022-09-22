// const express=require("express");
// const {MongoClient}=require("mongodb");

import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'
import { addMovies, getAllMovie, getMovieById, deleteMovieById,updateMovieById } from "./helper.js";
import { moviesRouter} from './routes/movies.js'
import { userRouter} from './routes/user.js'
import cors from "cors";

dotenv.config()
console.log(process.env)

const app=express();
app.use(cors())
const Port=process.env.Port;

//const MONGO_URL="mongodb://localhost"
const MONGO_URL=process.env.MONGO_URL;

async function createConnection(){
  const client=new MongoClient(MONGO_URL)
  await client.connect();
  console.log("connected to MongoDB");
  return client;
}

export const client=await createConnection();

app.use(express.json())

app.get("/",(req,res)=>{
  res.send("Hello")
})

//specify movie router

app.use("/movies",moviesRouter)

app.use("/user",userRouter)

app.listen(Port,()=> console.log("server started on port:",Port))
