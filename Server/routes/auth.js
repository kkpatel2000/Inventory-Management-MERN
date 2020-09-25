const express = require('express')
    const router = express.Router()

    const mongoose = require('mongoose') 
    const User = mongoose.model("User")
    var bcrypt = require('bcryptjs')
   const jwt = require('jsonwebtoken')
   const {JWT_SECRET} = require('../keys')
    const requireLogin = require('../middleware/requireLogin.js')
    
    router.get('/signup',(req,res,next)=>{
        User.find()
        .then(result=>{
            res.status(200).json({
            user:result
        });   
     })
    
        .catch(err=>{
            console.log(err)
            res.status(500).json({
                error:err
            })
        })
    })
    router.get('/auth',requireLogin,(req,res)=>{
        res.send("hello Welcome to dash bord")
    })


    router.post('/signup',(req,res)=>{
        const {Fullname,Email,Contact_number,Password} = req.body
        if(!Fullname || !Email || !Contact_number || !Password)
            {
                return res.json({error:"please fill up all data"})
            }
            User.findOne({Email:Email})
            .then((savedUser)=>{
                if(savedUser){
                    return res.json({error:" Email is alwardy used"})
                }
                bcrypt.hash(Password,12)
                .then(hashedpassword=>{
                    const user = new User({
                        Fullname,
                        Email,
                        Contact_number,
                        Password:hashedpassword
                    })
                    user.save()
                    .then(user=>{
                        res.json({message:"Saved succcfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                
         })
         .catch(err=>{
         console.log(err)
         })
    })

    router.post('/login',(req,res)=>{
        const {Email,Password} = req.body
        if(!Email || !Password){
            return res.json({error:"please add email or password"})
        }
        User.findOne({Email:Email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:" user name or Password is invalid"})
            }
           bcrypt.compare(Password,savedUser.Password)
            .then(doMatch=>{
                if(doMatch){
                   // res.json({message:"Loged in succefully"})
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                    const {_id,Fullname,Email}=savedUser
                    res.json({token,user:{_id,Fullname,Email}})
                
                }
                else{
                    return res.json({error:"Invaild user name or Password"})
                }
            })
            .catch(err=>{
                console.log(err)
            })
            
        })
    })
    module.exports = router
/*
    const express = require('express')
const router = express.Router()

const mongoose = require('mongoose') 
const User = mongoose.model("User")
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')
   
     router.get('/signup',(req,res,next)=>{
    User.find()
    .then(result=>{
        res.status(200).json({
        Userdata:result
    });   
 })

    .catch(err=>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})
    router.get('/protected',requireLogin,(req,res)=>{
        res.send("hello Welcome to dash bord")
    })


    router.post('/signup',(req,res)=>{
        const {Fullname,Email,Contact_number,Password} = req.body
        if(!Fullname || !Email || !Contact_number || !Password)
            {
                return res.json({error:"please fill up all data"})
            }
            User.findOne({Email:Email})
            .then((savedUser)=>{
                if(savedUser){
                    return res.json({error:" Email is alwardy used"})
                }
                bcrypt.hash(Password,12)
                .then(hashedpassword=>{
                    const user = new User({
                        Fullname,
                        Email,
                        Contact_number,
                        Password:hashedpassword
                    })
                    user.save()
                    .then(user=>{
                        res.json({message:"Saved succcfully"})
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                })
                
         })
         .catch(err=>{
         console.log(err)
         })
    })

    router.post('/login',(req,res)=>{
        const {Email,Password} = req.body
        if(!Email || !Password){
            return res.json({error:"please add email or password"})
        }
        User.findOne({Email:Email})
        .then(savedUser=>{
            if(!savedUser){
                return res.json({error:" user name or Password is invalid"})
            }
           bcrypt.compare(Password,savedUser.Password)
            .then(doMatch=>{
                if(doMatch){
                    //res.json({message:"Loged in succefully"})
                    const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                }
                else{
                    return res.json({error:"Invaild user name or Password"})
                }
            })
            .catch(err=>{
                console.log(err)
            })
            
        })
    })*/
