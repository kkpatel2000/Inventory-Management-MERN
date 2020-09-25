const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Employee  = mongoose.model("Employee")

router.get('/EmployeeRegistration',(req,res,next)=>{
    Employee.find()
    .then(result=>{
        res.status(200).json({
        EmployeeData:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})

router.post('/EmployeeRegistration',(req,res)=>{
    const{EmployeeID,
        EmployeeName,
        EmployeeGender,
        EmployeeMobile,
        EmployeeEmail,
        EmployeeAddress,
        E_count}=req.body
    if(!EmployeeID || !EmployeeName || !EmployeeGender || !EmployeeMobile|| !EmployeeEmail|| !EmployeeAddress){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const employee= new Employee({
        EmployeeID,
        EmployeeName,
        EmployeeGender,
        EmployeeMobile,
        EmployeeEmail,
        EmployeeAddress,
        E_count,
        EnterBy:req.user
    })
    employee.save().then(result=>{
      /*  transporter.sendMail({
            to:employee.EmployeeEmail,
            from:"no-reply@ItExponent.com",
            subject:"Signup successfully",
            html:"<h1>You are now member of ItExponent</h1>"
        })*/
        res.json({employee:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router
