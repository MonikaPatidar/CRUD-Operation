
let StudentSchema=require('../model/Student');
let express=require('express');
console.log("Student Controller");
exports.createstudent=(req,res)=>{
    let body=req.body;
    let StudentData=new StudentSchema(body);
    StudentData.save().then(()=>
    {
        res.send({notice:"Success"});
    }).catch((err)=>
    {
        res.send(err);
    });
}

exports.getstudents=(req,res)=>{
    StudentSchema.find().then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err);
    })
}

exports.getstudentsname=(req,res)=>
{
    StudentSchema.find({},{Name:1, StudentID:1}).then((data)=>
    {
       //console.log(data); 
        res.json({data:data});
    }).catch((err)=>
    {
        res.send(err);
    });
}


exports.updatestudent=(req,res)=>{
    id=req.params.id;
    data=req.body;
    StudentSchema.findByIdAndUpdate(id,{...data},{new:true}).then(()=>{
        res.json({data});
    }).catch((err)=>{
        res.send(err);
    });
}

exports.deletestudent=(req,res)=>{
    id=req.params.id;
    console.log(id);
    StudentSchema.findByIdAndRemove(id).then(()=>{
        res.json({
            success:true,
            message:"done"
        });
    }).catch(err=>{
        res.json({
            message:"wrong"});
    })
}