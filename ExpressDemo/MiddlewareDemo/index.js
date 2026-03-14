const express=require('express')
const path=require('path')
const adminRoutes=require('./routes/adminRoutes')
const app=express();

const PORT=8000
const HOSTNAME="localhost"


// middleware works between request and response


// Application Level Middleware
const myMiddleware1=function(req,res,next){
    console.log("Midlleware 1 calling");
    next();  // it will forward the request to the next middleware or route handler
}

app.use(myMiddleware1)



// middleware for specific route
app.use('/home',(req,res,next)=>{
    console.log("Middleware 2 calling");
    next();
})

app.use('/admin',adminRoutes)




app.get('/home',(req,res)=>{
    res.send("<h1 align='center'> Application Home page</h1>");
})


app.get('/',(req,res)=>{
    res.send("<h1 align='center'>Application default page</h1>");
})

// middleware works between request and response
app.use(myMiddleware1)

//error handling middleware
app.use((err,req,res,next)=>{
    console.log("Error handling middleware calling");
    res.status(500).send("Something went wrong");
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