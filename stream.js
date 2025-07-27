const http = require('http')
const server = http.createServer()
const fs = require('fs')



server.listen(3000, '127.0.0.1',()=>{
    console.log('server started on http://127.0.0.1:3000');
    
})


server.on('request',(req,res)=>{
    fs.readFile('./files/bigfile.txt','utf-8',(err,data)=>{
        if (err) {
           res.end('something went wrong')
           return; 
        }
        res.end(data)
    })
})