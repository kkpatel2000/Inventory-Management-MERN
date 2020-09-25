const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Vendor  = mongoose.model("Vendor")

router.get('/VendorRegistration',(req,res,next)=>{
    Vendor.find()
    .then(result=>{
        res.status(200).json({
        VendorData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
router.post('/VendorRegistration',(req,res)=>{
    const{VendorID,
		VendorName,
		VendorGender,
		VendorEmail,
		VendorMobile,
		VendorAddress}=req.body
    if(!VendorID || !VendorName || !VendorGender || !VendorEmail || !VendorMobile || ! VendorAddress){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const vendor= new Vendor({
        VendorID,
		VendorName,
		VendorGender,
		VendorEmail,
		VendorMobile,
		VendorAddress,
        EnterBy:req.user
    })
    vendor.save().then(result=>{
        res.json({vendor:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router
