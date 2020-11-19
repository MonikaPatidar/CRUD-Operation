//Import express module
const express=require("express");               
const mongoose=require("mongoose");
const cookieParser=require("cookie-parser");
const bodyParser = require("body-parser");
const cors=require("cors");

//import files from routes and save it to variable
const albumsRoutes=require("./routes/albums");      
const PhotoRoutes=require("./routes/photo");        
const CommentRoutes=require("./routes/comment");    
const TodoRoutes=require("./routes/todo");          
const StudentDetails=require('./routes/student');
const app=express();


//Connecting to mongoDB
mongoose.connect('mongodb://localhost:27017/monika',{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(()=>{
    console.log("DB connected");
})


app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//add middleware used by routes
app.use("/api",albumsRoutes);
app.use("/api",PhotoRoutes);
app.use("/api",CommentRoutes);
app.use("/api",TodoRoutes);
app.use("/api",StudentDetails);
//create node server at 8000 port
const port=process.env.PORT||4000;
app.listen(port,()=> console.log(`server is running on ${port} !`));    