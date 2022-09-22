const { default: file } = require("babel-core/lib/transformation/file");
const fs=require("fs");

//fs.unlink("./filefolder/text-1.html",(err)=>{console.log("deleted file");})

fs.readdir("./filefolder",(err,files)=>{
    console.log("all the data of directory",files)
    files.forEach(filename=>{
        fs.unlink(`./filefolder/${filename}`,(err)=>{console.log("deleted file");})

    })
});

   