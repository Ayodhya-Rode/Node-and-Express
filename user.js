// step 1 : import module

const http = require('http')
const fs = require('fs')


const html = fs.readFileSync('./user.html','utf-8')
const data = JSON.parse(fs.readFileSync('./user.json','utf-8'))

//  step 2 : create a server
const server = http.createServer((req,res)=>{
    const path = req.url;
    if (path === '/' || path.toLowerCase() === '/home') {
        res.writeHead(200,{'content-type':'text/html'})
        const user = data[0]; 
        let output = html.replace('{{%NAME%}}', user.name);
        output = output.replace('{{%MAIL%}}', user.email);
        output = output.replace('{{%MOBILE%}}', user.phone);
        output = output.replace('{{%CITY%}}', user.city);
        output = output.replace('{{%AGE%}}', user.age);
        output = output.replace('{{%PROFESSION%}}', user.profession);
        res.end(output); 

       
        
    }
    
})

//  step 3 : listen on port 

server.listen(3000,'127.0.0.1',()=>{
    console.log(`server started on port http://127.0.0.1:3000`);
    
})
