// const express=require("express");
// const {MongoClient}=require("mongodb");

import express from "express";
import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()
console.log(process.env)

const app=express();
const Port=process.env.Port;

//const MONGO_URL="mongodb://localhost"
const MONGO_URL=process.env.MONGO_URL;

async function createConnection(){
  const client=new MongoClient(MONGO_URL)
  await client.connect();
  console.log("connected to MongoDB");
  return client;
}

const client=await createConnection();

app.use(express.json())


//post method - to insert data to db
app.post("/movies", async (request, response) => {
  const newMovies = request.body;
  console.log(newMovies);
  //db.movies.insertMany(movies)
  const result = await client
  .db("b37wd")
  .collection("movie")
  .insertMany(newMovies);

  response.send(result);
})

app.get("/",(req,res)=>{
    res.send("Hello")
})


app.get("/movies",async (req,res)=>{
    // const { language,rating }=req.query;
    // console.log(req.query,language);
    if(req.query.rating){
      req.query.rating=+req.query.rating;
    }
    let filterMovies=await client
    .db("b37wd")
    .collection("movie")
    .find(req.query).toArray();

    // if(language){
    //   filterMovies=filterMovies.filter((mv)=> mv.language===language)
    // }
    
    // if(rating){
    //   filterMovies=filterMovies.filter((mv)=> mv.rating===+rating)
    // }
    res.send(filterMovies)
})

app.get("/movies/:id", async (req,res)=>{
    const {id}=req.params;
    console.log(id)
    const movies= await client
    .db("b37wd")
    .collection("movie")
    .findOne({id: id});
    movies
    ? res.send(movies)
    : res.status(404).send({message : "no movie found" })

})

app.delete("/movies/:id", async (req,res)=>{
  const {id}=req.params;
  console.log(id)
  const movies= await client
  .db("b37wd")
  .collection("movie")
  .deleteOne({id: id});
  res.send(movies)
})

app.listen(Port,()=> console.log("server started on port:",Port))