const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.render("users.ejs", {text: "text sent"}).send("new user")
})

router.get("/new", (req, res) => {
    res.send("new user")
})

module.exports = router