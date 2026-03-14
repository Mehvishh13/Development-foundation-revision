const express=require('express')
const adminController= require('../controller/adminController')
const router=express.Router()

router.get('/',adminController.adminDefault);
router.get('/home',adminController.adminHome);

router.get('/main',adminController.adminMain);


router.get('/add',adminController.addUser);

router.post('/add',adminController.addUser);

module.exports=router;