// console.log("trying to explain ");
// const example_node={
//     name:"cse7",
//     block:"a",
//     working:true,
// };

const { request } = require("express");

// const example_node1={
//     name:"naitik",
//     div:"6b7",
//     working:false,
// }
// module.exports=example_node1

// module.exports=example_node;


const express=require("express")
const app=express()

app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>
{
    res.sendFile(__dirname+'index.html')
})