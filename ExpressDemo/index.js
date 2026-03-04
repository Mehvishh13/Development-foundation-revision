const express=require('express')
const app=express();

const PORT=8000
const HOSTNAME="localhost"

//handlers--> syntax for handler

// app.methodname(Router, routehandler)--> here methodname is the HTTP method (GET, POST, PUT, DELETE, etc.) and when method name and route matches then route handler will be called.

// route handler takes two parameters, first is request object and second is response object.

app.get('/',(req,res)=>{
    console.log("helloooo..");
    res.send("<h1 align='center'>Welcome to the homepage!</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1 align='center'>Welcome to the about page!</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1 align='center'>Welcome to the contact page!</h1>");})


app.post("/",(req,res)=>{
    res.send("<h1 align='center'>This is a post request!</h1>");
})




app.listen(PORT,HOSTNAME,(err)=>{
    if(!err){
        console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
    }
        else{
            console.log(err);
        }
    }
)