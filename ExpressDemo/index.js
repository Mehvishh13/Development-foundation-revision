const express=require('express')
const adminRoute=require("./Routes/adminRoute")
const userRoute=require("./Routes/userRoutes")

const app=express();

const PORT=8000
const HOSTNAME="localhost"

//handlers--> syntax for handler

// app.methodname(Router, routehandler)--> here methodname is the HTTP method (GET, POST, PUT, DELETE, etc.) and when method name and route matches then route handler will be called.

// route handler takes two parameters, first is request object and second is response object.

app.set('view engine','ejs');

//localhost:8000/admin --> if request will come to this route then adminRoute will handle the request and response.
app.use("/admin",adminRoute);


//localhost:8000/user --> if request will come to this route then userRoute will handle the request and response.
app.use("/user",userRoute);
 

//localhost:8000/
app.get('/',(req,res)=>{
    console.log("helloooo..");
    res.render('default'); // render method is used to render the view file, here we are rendering default.ejs file which is present in views folder.
})



//localhost:8000/about
app.get("/about",(req,res)=>{
    res.send("<h1 align='center'>Welcome to the about page!</h1>");
})

app.get("/contact",(req,res)=>{
    res.send("<h1 align='center'>Welcome to the contact page!</h1>");})

//localhost:8000/ , methodname is POST
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