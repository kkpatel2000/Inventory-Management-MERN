const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Fullname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Contact_number:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
})

mongoose.model("User",userSchema)
