require('dotenv').config()
console.log("chai aur code")


const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req,res) => {
    res.send('hello world')
})

app.get('/twitter',(req, res) =>{
    res.send('shreyamishra')
})

app.get('/login',(req,res)=>{
    res.send('<h1> please follow your dreams</h1> ')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai aur code</h2>")
})


app.listen(process.env.PORT,() => {
    console.log(`Example app listening on port ${port}`)
})