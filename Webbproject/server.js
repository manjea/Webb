const express = require('express')
const app = express()

app.listen(3000)
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))


app.get('/', (req, res) => {
    res.render("index", {text: "index"})
})

const formRouter = require('./routes/form')
app.use('/form', formRouter)

const userRouter = require('./routes/users')
app.use('/users', userRouter)