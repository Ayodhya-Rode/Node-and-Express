# const readline = require('readline')
    for terminal input and output
    
# const fs = require('fs')
    for reading and writing in file

## with Sync
    fs.readFileSync('./files/file.txt', 'utf-8')
    fs.writeFileSync('./files/output.txt','hi9878')
## with Async
    fs.readFile( './files/file.txt', 'utf-8', (err,data)=>{     })
    fs.WriteFile( './files/file.txt', 'utf-8', (err,data)=>{     })

# const http = require('http')
    for creating server

# const url = require('url')
    for reading url


