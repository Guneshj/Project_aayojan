
const express = require("express");
const sessionStorage = require('sessionstorage');


const checkAuth  = (req,res,next)=>{
    user= sessionStorage.getItem("sessionUser");
    email=sessionStorage.getItem("sessionEmail");
    let route = req.url.substring(1, req.url.length);
    if(user&&email){
        res.render(route ,{user:user,msg:''});
        }
        else{
           next();
        }
    
}
module.exports = checkAuth;