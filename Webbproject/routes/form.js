const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    res.render("form", {firstName : "holy shit", lastName : req.body.lastName})
})

router.post("/example", (req, res, next) => {
    isValid = true
    if(isValid){
        console.log("firstName: " + req.body.firstName)
        console.log("lastName: " + req.body.lastName)
        console.log(res.render("form/example", {firstName: "req"}) + "woo it ran")
        console.log("did it just not run?")
        next()
    }else{
        console.log("Error")
        res.render("form", {firstName : req.body.firstName, lastName : req.body.lastName})
    }
})

router.get("/example", (req, res) => {
    res.render("form/example")
})

router.get("/", (req, res, next) => {
    res.render("form", {firstName: "req"})
})


module.exports = router