const jwt = require('jsonwebtoken')
const Student = require("../models/student");
const { JWT_SECRET } = require("../keys");


module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    //authorization === Bearer ewefwegwrherhe
    if(!authorization){
       return res.status(401).json({error:"you must be logged in"})
    }
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
         return   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        Student.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
        
    })
}