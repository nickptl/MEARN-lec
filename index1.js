// const kush=require("./second")
// console.log("student data is:")
// console.log(kush);
// console.log("hi hello good morning")
// console.log("i am tring to learn node.js")
// console.log("hope i am able")




// if don't pass any kind of(err,data) then it will show as an error
// const fs=require('fs')
// console.log(fs)
// fs.readFile("file.txt","utf-8",(err,data)=>
// {
//     console.log(err,data);
// });
// console.log("rest of the code");


// const fs=require("fs");
// fs.readFile("file.txt","utf-8")
// {
//     console.log("hii")
// }
// console.log("finish of code");

// const fs=require("fs");
// fs.readFile("file1.txt","utf-8",(err,data)=>{
// {
//     console.log(data)
// }
// })
// console.log("finish of code");


// const fs=require("fs");
// const pk=fs.readFileSync('file1.txt','utf-8')
// console.log(pk);
// console.log("rest of code")
// const pk1=fs.writeFileSync("file2.txt","this is second file");
// console.log(pk1);
// console.log("rest of code");

// const pk2=fs.writeFile("file2.txt","gaurav bahi",(err,data)=>{
//     console.log("this is second page1111");
// })
// console.log("naitik");
// console.log(pk2);


// const fs=require ('fs')
// const http=require("http")
// const path=require("path")
// const myserver=http.createServer((req,res)=>{
//     const log=`${new Date()}:${req.url}:requested\n`
//     fs.appendFile('log.txt',log,()=>{})
//     console.log("request received");
//     switch(req.url){
//         case '/Home':
//             fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
//                 res.end(content)
//             })
//             break;
//         case '/about':
//             fs.readFile(path.join(__dirname,'index1.html'),(err,content)=>{
//                 res.end(content)
//             })
//             break;
//         case '/contact':
//             fs.readFile(path.join(__dirname,'index2.html'),(err,content)=>{
//                 res.end(content)
//             })
//             break;
//         default:
//             res.end("page not found")
//     }
// })

// myserver.listen(8000,()=>{
//     console.log("server is running");
// })
// function abc(req,res){
//     const log=`${new Date()}:${req.url.method}:requested\n`

//     fs.appendFile('log.txt',log,()=>{})
//     console.log("request received");
//     switch(req.url){
//         case "/":
//             if(req.method==="GET"){
//                 fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
//                     res.end(content)
//                 })
//             }
//             else{
//                 res.end("posted")
//             }
//             break
//             case "/about":
//                 if(req.method==="GET"){
//                     fs.readFile(path.join(__dirname,'index1.html'),(err,content)=>{
//                         res.end(content)
//                     })
//                 }
//                 else{
//                     res.end("posted")
//                 }
                
//     }


// }


// const myserver=http.createServer((req,res)=>{
// const log=`${new Date()}:${req.url.method}:requested\n`

//     fs.appendFile('log.txt',log,()=>{})
//     console.log("request received");
//     switch(req.url){
//         case "/":
//             if(req.method==="GET"){
//                 fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
//                     res.end(content)
//                 })
//             }
//             else{
//                 res.end("posted")
//             }
//             break
//             case "/about":
//                 if(req.method==="GET"){
//                     fs.readFile(path.join(__dirname,'index1.html'),(err,content)=>{
//                         res.end(content)
//                     })
//                 }
//                 else{
//                     res.end("posted")
//                 }
                
//     }


// })



// const express=require("express")
// const app=express()
// app.use((req,res,next)=>{
//     console.log("i am middleware")
//     next();
// })
// app.get('/',(req,res)=>{
//     res.send("i have started working with express")
// })
// app.get('/about',(req,res)=>{
//     res.send("i use this page about")
// })
// app.get('/content',(res,req)=>{
//     res.send("i use this page content")
// })
// app.listen(8000,()=>{
//     console.log("server is created")
// })

// const express=require("express")  
// const app=express()
// app.use(express.static('public'))
// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })