const f=require("fs");
const date_time=new Date();
let date = ("0" + date_time.getDate()).slice(-2);

// get current month
let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

// get current year
let year = date_time.getFullYear();

const date_file=year + "-" + month + "-" + date;
// prints date & time in YYYY-MM-DD HH:MM:SS format
console.log(date_file.toString());
f.writeFile(`./filefolder/${date_file}.txt`,date_file,(err)=> {console.log(`completed writing ${date_file}.txt`)})


f.readdir("./filefolder/","utf-8",(err,files)=>{
    if(err){
        console.log("Error",err)
    }
    console.log("Files in the folder-",files);
    files.forEach((file)=>{
        f.readFile(`./filefolder/${file}`,"utf-8",(err,data)=>{
            if(err){
                console.log("Error",err)
            }
            console.log(`The content of ${file} file-`,data);
        })
    })
    
})
// const [,,filecount]=process.argv
// for(let i=1;i<=+filecount;i++){
//     f.writeFile(`./filefolder/text-${i}.html`,data,(err)=> {console.log(`completed writing text-${i}.html`)})
// }