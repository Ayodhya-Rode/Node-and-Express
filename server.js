// step 1 : import module

const http = require('http')
// const fs = require('fs')
const url = require('url')


// const html = fs.readFileSync('./index.html','utf-8')
// const data = JSON.parse(fs.readFileSync('./data.json','utf-8'))

//  step 2 : create a server

const server = http.createServer((req,res)=>{
    // const path = req.url;
    // if (path === '/' || path.toLowerCase() === '/home') {
    //     res.writeHead(200,{'content-type':'application/json'})

    //     res.end(html.replace('{{%placeholder%}}', 'contact page')) 
    //     console.log(data);
        
    // }
    // else if (path.toLowerCase() === '/contact') {
    //     res.end(html.replace('{{%placeholder%}}', 'contact page')) 
    // }
    // else if (path.toLowerCase() === '/about') {
    //     res.end(html.replace('{{%placeholder%}}', 'about page')) 
    // }
    // else{
    //     res.end('404 - not found')
    // }

    let x = url.parse(req.url,true)
    console.log(x);
    res.end('query string')
    
})

//  step 3 : listen on port 

server.listen(3000,'127.0.0.1',()=>{
    console.log(`server started on port http://127.0.0.1:3000`);
    
})
