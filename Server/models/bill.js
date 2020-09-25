const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const billschema = new mongoose.Schema({
    BillID:{
        type:String,
        required:true
    },
    Dos:{
        type:String,
        required:true
    },
    Invoice:{
        type:String,
        required:true
    },
    VendorID:{
        type:String,
        required:true
    },
    ProductID1:{
        type:String,
        required:true
    },
    ProductID2:{
        type:String
        
    },
    ProductID3:{
        type:String
        
    },
    p1:{
        type:String,
        required:true
    },
    p2:{
        type:String,
        
    },
    p3:{
        type:String,
        
    },
    q1:{
        type:String,
        required:true
    },
    q2:{
        type:String,
        
    },
    q3:{
        type:String,
        
    },
    t1:{
        type:String,
        required:true
    },
    t2:{
        type:String,
        
    },
    t3:{
        type:String,
        
    },
    t:{
        type:String,
        required:true
    },
    sgst:{
        type:String,
        required:true
    },
    total:{
        type:String,
        required:true
    }
    
})

mongoose.model("Bill",billschema)
