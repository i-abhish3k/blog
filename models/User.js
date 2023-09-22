const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide a Username"],
        unique:true,
    },
    email:{
        type : String ,  //email is the name of our field in schema and it's string data type
        require:true,
        unique:true,
    },
    password:{
        type: String,
        require: true
    },
    profilePic:{
        type:String,
        default:"",
    },    
},{timestamps:true})

module.exports = mongoose.model("User", UserSchema)