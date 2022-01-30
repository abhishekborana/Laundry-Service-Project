const mongoose = require("mongoose");
const DB ="";
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 }).then(()=>{
    console.log("connection established")
}).catch(err=>{
    console.log(err)})

