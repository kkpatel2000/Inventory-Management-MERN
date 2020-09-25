const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Row  = mongoose.model("Row")

router.get("/search/:RowID",function(req,res)
{
    var regex=new RegExp(req.pararams.RowID,'i');
    Row.find({RowID:regex}).then((result)=>{
        res.status(200).json(result)
    })
})



router.get('/RowEntry',(req,res,next)=>{
    Row.find()
    .then(result=>{
        res.status(200).json({
        RowData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})




router.route('/StockEntry/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})



router.post('/RowEntry',(req,res)=>{
        const{  RowID,
            MatrialName,
            Quantity,
            Price,
            DateofPurchase,
            VendorID,
            InvoiceNumber,
            CPU}=req.body
    if(!RowID || !MatrialName || !Quantity || !Price || !DateofPurchase || !VendorID|| !InvoiceNumber || !CPU){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const row= new Row({
        RowID,
		MatrialName,
		Quantity,
		Price,
		DateofPurchase,
		VendorID,
		InvoiceNumber,
		CPU,
        EnterBy:req.user
    })
    row.save().then(result=>{
        res.json({row:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router
