require('dotenv').config()



console.log("rehan khan");
const express = require('express') //same as import express from 'express'
const app = express()
const port = 4000



app.get('/', (req, res) => { // here "/" means home directory
  res.send('Hello World!')
})



app.get("/google",(req,res)=>{
    res.send("https://chatgpt.com/?oai-dm=1")

})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


