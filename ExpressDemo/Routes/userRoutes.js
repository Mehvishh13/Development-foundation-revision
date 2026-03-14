const express=require('express');
const { route } = require('./adminRoute');
const router=express.Router();


//localhost:8000/user
router.get('/', (req, res) => {
   res.send("User Page");
});



//      <----Dynamic route--->

//localhost:8000/user/(username)
router.get('/:name', (req, res) => {
    res.send(`Welcome ${req.params.name}.......!`);
 });


 router.get('/:name/:id', (req, res) => {
    res.send(`Welcome ${req.params.name} with ID ${req.params.id}.......!`);
 });



module.exports=router;