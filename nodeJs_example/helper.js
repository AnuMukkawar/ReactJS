import { client } from "./index.js";
import bcrypt from "bcrypt";

export async function getAllMovie(req) {
  return await client
    .db("b37wd")
    .collection("movie")
    .find(req.query).toArray();
}
export async function getMovieById(id) {
  return await client
    .db("b37wd")
    .collection("movie")
    .findOne({ id: id });
}
export async function deleteMovieById(id) {
  return await client.db("b37wd").collection("movie").deleteOne({ id: id });
}
export async function addMovies(newMovies) {
  return await client
    .db("b37wd")
    .collection("movie")
    .insertMany(newMovies);
}

export async function updateMovieById(id,updateMovie) {
  return await client
    .db("b37wd")
    .collection("movie")
    .updateOne({id:id},{$set:updateMovie});
}

export async function genPassword(password){
  const salt= await bcrypt.genSalt(10);
  console.log(salt)
  const hashPass= await bcrypt.hash(password,salt);
  return hashPass;
}

export async function createUser(username,password) {
  return await client
    .db("b37wd")
    .collection("users")
    .insertOne({username:username,password:password});
}

export async function getUserByName(username) {
  return await client
    .db("b37wd")
    .collection("users")
    .findOne({username:username});
}
