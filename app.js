
// console.log(__dirname);
// console.log(__filename);
// console.log(process.title);


/*  // for terminal input and output
const readline = require('readline')
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question(`Enter name : `,((name)=>{
    console.log(`welcome ${name} to node js`);
    rl.close()
}))*/


// for reading and writing in file

// const fs = require('fs')

// const data = fs.readFileSync('./files/file.txt', 'utf-8')
// console.log(data);

// fs.writeFileSync('./files/output.txt','hi9878')

//async


// const fs = require('fs')

// fs.readFile('./files/file.txt', 'utf-8',(err,data)=>{
//     console.log(data);
//     fs.readFile(`./files/${data}.txt`,'utf-8',(err2,data2)=>{
//         console.log(data2);
//     })
// })