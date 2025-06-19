require('dotenv').config()
console.log("hiiiii")
const express = require('express')
//import express from "express" (alterna. of line 2)
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/tt', (req, res) => {
  res.send('Hello World! yaa huuu')
})

app.get('/yogi',(req,res)=>{
    res.send('<h1>yogi baba ki jay</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
