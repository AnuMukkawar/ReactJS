const fs=require("fs");

fs.readFile("./awsome.txt","utf-8",(err,data)=>{
    if(err){
        console.log("Error",err)
    }
    console.log("The content of file-",data);
})

const str="\nGood Day"
fs.appendFile("./awsome.txt",str,(err)=>{
    console.log("appending data");
})