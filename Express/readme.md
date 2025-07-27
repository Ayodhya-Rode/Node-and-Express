# import express package

const express = require('express')

const app = express()

# Route => HTTP Method + URL

app.get('/',(req,res)=>{
   res.status(200).send('We are at home page')
})

# create server

const PORT = 3030
app.listen(PORT,()=>{
    console.log('server has started');
    
})