var express=require('express');
var router=express.Router();
console.log("Student Router");
const{createstudent,getstudents,updatestudent,deletestudent}=require('../controller/Student');

router.post('/createstudent',createstudent);
router.get('/getstudents',getstudents);
router.put('/updatestudent/:id',updatestudent);
router.delete('/deletestudent/:id',deletestudent);
module.exports=router;