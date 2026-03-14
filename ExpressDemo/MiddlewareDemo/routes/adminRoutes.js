const express= require('express')
const router=express.Router()


//Router Level Middleware
router.use((req,res,next)=>{
    console.log("Admin Middleware calling");
    next();
})

const middleware3=function(req,res,next){
    console.log("Admin Middleware 3 calling");
    next();
}

// for specific path and specific method
router.get('/',middleware3,(req,res)=>{
    res.send("<h1 align='center'>Admin Default page</h1>");
} )

module.exports=router;