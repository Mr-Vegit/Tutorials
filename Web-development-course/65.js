// Synchronous or blocking
// -- line by line execution 


// Asynchronous or non-blocking
// -- line by line execution not guaranteed
// -- callbacks will fire
const fs = require("fs");
let text = fs.readFile("delta.txt", "utf-8", ( err, data)=>{
    console.log(err,data);
});
console.log("This is a message");