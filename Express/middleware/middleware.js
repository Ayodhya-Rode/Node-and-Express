const express = require('express')
const app = express()
const PORT = 4000;

// Application level mv

const appLevel = function(req,res,next){
    console.log('I am app level mv');
    next()
}

//Router level mv
const router = express.Router()

router.use((req,res,next)=>{
    console.log('I am router level mv');
    next()
})

// Error-handling middleware



app.use(appLevel)
app.use(router)


app.get('/',(req,res)=>{
    console.log('I am a home route in get....');
    res.status(200).json({
        status:'success',
        data:"home"
    })
    //    next(err);
})

// const errorlevel = function(err,req,res,next){
//     console.log('I am error level mv');
//     res.status(500).json({
//         status:'error',
//         data:{
//             msg : 'error occured'
//         }
//     })
// }
// app.use(errorlevel)

app.listen(PORT,()=>{
    console.log(`server is listioning on  http://localhost:4000`);
    
})
