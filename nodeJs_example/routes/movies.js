import express from "express";
const router=express.Router();
import { addMovies, getAllMovie, getMovieById, deleteMovieById,updateMovieById } from "../helper.js";
import { auth } from '../middleware/auth.js'
//post method - to insert data to db
router.post("/", async (request, response) => {
    const newMovies = request.body;
    console.log(newMovies);
    //db.movies.insertMany(movies)
    const result = await addMovies(newMovies);
  
    response.send(result);
  })
  
  
  router.get("/", async (req,res)=>{
      // const { language,rating }=req.query;
      // console.log(req.query,language);
      if(req.query.rating){
        req.query.rating=+req.query.rating;
      }
      let filterMovies=await getAllMovie(req);
  
      // if(language){
      //   filterMovies=filterMovies.filter((mv)=> mv.language===language)
      // }
      
      // if(rating){
      //   filterMovies=filterMovies.filter((mv)=> mv.rating===+rating)
      // }
      res.send(filterMovies)
  })
  
  router.get("/:id", auth, async (req,res)=>{
      const {id}=req.params;
      console.log(id)
      const movies= await getMovieById(id);
      movies
      ? res.send(movies)
      : res.status(404).send({message : "no movie found" })
  
  })
  
  router.delete("/:id", async (req,res)=>{
    const {id}=req.params;
    const movies= await deleteMovieById(id)
    res.send(movies)
  })

  router.put("/:id", async (req,res)=>{
    const {id}=req.params;
    const updateMovie= req.body;
    const movies= await updateMovieById(id,updateMovie)
    res.send(movies)
  })

  export const moviesRouter=router;