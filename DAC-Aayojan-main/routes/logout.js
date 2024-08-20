//logout page

const express = require('express');
const router = express.Router()
const sessionStorage = require('sessionstorage');

router.route("/logout")
.get((req,res)=>{
    sessionStorage.clear();
    user=""
    email=""
    console.log(user + ":" + email );
    res.redirect("/login")
});

module.exports = router

