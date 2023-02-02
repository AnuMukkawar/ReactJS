const mongoose = require("mongoose");


const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    dob: Date,
    age: Number,
    contact:{type:Number,length:10} ,
    email: { type: String, unique: true },
    password: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
