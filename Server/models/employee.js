const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const employeeSchema = new mongoose.Schema({
    EmployeeID:{
        type:String,
        required:true
    },
    EmployeeName:{
        type:String,
        required:true
    },
    EmployeeGender:{
        type:String,
        required:true
    },
    EmployeeMobile:{
        type:String,
        required:true
    },
    EmployeeEmail:{
        type:String,
        required:true
    },
    EmployeeAddress:{
        type:String,
        required:true
    },
   E_count:{
       type:String
   }
})

mongoose.model("Employee",employeeSchema)
