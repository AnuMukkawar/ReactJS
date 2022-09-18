import express from "express";
const router=express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {genPassword,createUser,getUserByName} from "../helper.js";

router.post("/signup", async (request, response) => {
    const {username,password} = request.body;
    const isUserExist= await getUserByName(username)
    if(isUserExist){
        response.status(400).send({message:" Username already taken "});
        return;
    }
    if( !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@!#%$]).{8,}$/g.test(password) ) {
        response.status(400).send({ message: "Password pattern does not match"})
        return;
    }
    console.log(username,password);
    const hashPassword = await genPassword(password);
    const result =await createUser(username,hashPassword);
    response.send(result);
  })

//login
  router.post("/login", async (request, response) => {
    const {username,password} = request.body;
    const userFromDb= await getUserByName(username)
    if(!userFromDb){
        response.status(400).send({message:" Invalid Credentials "});
        return;
    }
    const storedPassword=userFromDb.password;

    const isPasswordMatch= await bcrypt.compare(password,storedPassword)
    if(!isPasswordMatch){
        response.status(400).send({message:"  Invalid Credentials "});
        return;
    }
    const token=jwt.sign({id:userFromDb._id},process.env.SECRET_KEY);

    response.send({message:"Successful Login!", token:token});
  })

 export const userRouter=router;