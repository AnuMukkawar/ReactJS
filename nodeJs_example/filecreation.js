const f=require("fs");
const data="Hi beautiful";
const [,,filecount]=process.argv
for(let i=1;i<=+filecount;i++){
    f.writeFile(`./filefolder/text-${i}.html`,data,(err)=> {console.log(`completed writing text-${i}.html`)})
}