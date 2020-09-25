const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const stockschema = new mongoose.Schema({
    ProductID:{
        type:String,
        required:true
    },
    ProductType:{
        type:String,
        required:true
    },
    Length:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    EID:{
        type:String,
        required:true
    },
    EnterBy:{
        type:ObjectId,
        ref:"User"

    }
})

mongoose.model("Stock",stockschema)
