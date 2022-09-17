const os=require("os");
console.log("Free memory",os.freemem());
console.log("Total memory",os.totalmem());
console.log("os version",os.version());
console.log("Cpu details",os.cpus());