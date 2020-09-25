const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Stock  = mongoose.model("Stock")

router.get('/StockEntry',(req,res,next)=>{
    Stock.find()
    .then(stock=>{res.json(stock);   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


router.get('/StockEntry1',(req,res,next)=>{
    Stock.find()
    .then(result=>{
        res.status(200).json({
        StockData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

router.route('/StockEntry/:ProductID').delete((req, res, next) => {
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


router.post('/StockEntry',(req,res)=>{
    const{ProductID,
        ProductType,
        Length,
        Date,
        EID}=req.body
    if(!ProductID || !ProductType || !Length || !Date || !EID){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const stock= new Stock({
        ProductID,
        ProductType,
        Length,
        Date,
        EID,
        EnterBy:req.user
    })
    stock.save().then(result=>{
        res.json({stock:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router
