const express=require('express')
const router=express.Router()


//localhost:8000/admin
router.get('/',(req,res)=>{
    // res.send("<h1 align='center'>Welcome to the admin page!</h1>");


    const name="Mehvish Khan";
    const age=22;

    res.render('admin',{name:name, age:age});  // name object is passed to the admin.ejs file which is present in views folder and we can use this name object in admin.ejs file to display the name.
})

router.get('/home',(req,res)=>{
    // res.send("<h1 align='center'>Welcome to the admin home page!</h1>");


    const temp= "<p style='color: yellow; padding: 10px;'>This is a paragraph from admin home page!</p>";


    res.render('adminHome',{temp:temp});
})



module.exports=router;