const express = require('express')
const router = express.Router()

router.post("/formRes", (req, res, next) => {
    isValid = true
    if(req.body.firstName == "hejsan"){
        isValid = false
    }
    if(isValid){
        res.render("form/formRes", {firstName : req.body.firstName, lastName : req.body.lastName})
    }else{
        console.log("hej Error")
        res.render("form", {firstName : req.body.firstName, lastName : req.body.lastName})
    }
    next()
})

router.get("/example", (req, res) => {
    res.render("form/example")
})

router.get("/formRes", (req, res) => {
    console.log("hagkjb ")
    res.render("form/formRes")
})

router.get("/", (req, res) => {
    res.render("form")
})


module.exports = router