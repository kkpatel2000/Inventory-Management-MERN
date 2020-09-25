const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const rowschema = new mongoose.Schema({
    RowID:{
        type:String,
        required:true
    },
    MatrialName:{
        type:String,
        required:true
    },
    Quantity:{
        type:String,
        required:true
    },
    Price:{
        type:String,
        required:true
    },
    DateofPurchase:{
        type:String,
        required:true
    },
    VendorID:{
        type:String,
        required:true
    },
    InvoiceNumber:{
        type:String,
        required:true
    },
    CPU:{
        type:String,
        required:true
    },
    EnterBy:{
        type:ObjectId,
        ref:"User"

    }
})

mongoose.model("Row",rowschema)
