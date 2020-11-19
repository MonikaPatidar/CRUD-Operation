var mongoose= require('mongoose');
console.log("Student Model Running");
var Student= new mongoose.Schema(
    {
        StudentID:
        {
            type:Number,
            maxlength:5,
            required:true,
            trim:true
        },
        Name:
        {
            type:String,
            maxlength:30,
            required:true,
            trim:true
        },
        Class:
        {
            type:String,
            maxlength:10,
            required:true,
            trim:true
        },

    },
    {timestamps:true}
    
)
module.exports=mongoose.model('StudentSchema', Student);