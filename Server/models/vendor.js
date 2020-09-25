const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const vendorSchema = new mongoose.Schema({
    VendorID:{
        type:String,
        required:true
    },
    VendorName:{
        type:String,
        required:true
    },
    VendorGender:{
        type:String,
        required:true
    },
    VendorEmail:{
        type:String,
        required:true
    },
    VendorMobile:{
        type:String,
        required:true
    },
    VendorAddress:{
        type:String,
        required:true
    },
    EnterBy:{
        type:ObjectId,
        ref:"User"

    }
})

mongoose.model("Vendor",vendorSchema)
