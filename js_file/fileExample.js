const { ifError } = require('assert');
const { error } = require('console');
const fs = require('fs');

// // -----> read file
// // asynchronous
// fs.readFile('./abc.txt', (error, data)=>{
// if(error){
//     console.log("error");
//     console.log(error);
// }else{
//     console.log(data.toString());
// }
// });

// // synchronous
// fs.readFileSync('./xyz.txt', (error, data) => {
// if(error){
//     console.log(`error occured `);
//     console.log(error);
// }else{
//     console.log(data.toString());
// }
// });
// console.log("Terminated")


// // ----> write file
// let content = "Hello World! My name is Sujan Rijal"
// fs.writeFile('./xyz.txt', content, (error)=>{
//     if(error){
//         console.log("error occured");
//         console.log(error);
//     }else{
//         console.log("five saved")
//     }
// });


// // ------->   append file
// let newContent = "\nHi! My Name is Sujan Rijal.\nI Live in BaltiMore Marryland."
// fs.appendFile('./abc.txt', newContent, (error)=>{
//     if(error){
//         console.log("error occured..");
//     }else{
//         console.log("file Saved..")
//     }
// });

// // -------> delete file
// fs.unlink('./xyz.txt', function (error){
//     if(error){
//         console.log("error occured");
//     }else{
//         console.log("file deleted..")
//     }
// });