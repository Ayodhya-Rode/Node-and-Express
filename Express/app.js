// import express package

const express = require('express')
const app = express()
const fs = require('fs')

const movies = JSON.parse(fs.readFileSync('./data/movies.json'))

app.use(express.json())     //middleware

// GET - all movies         /movies
app.get('/api/v1/movies',(req,res)=>{
    res.status(200).json({
        status : 'success',
        count: movies.length,
        data:{
            movies:movies
        }
    })
})

app.get('/api/v1/movies/:id',(req,res)=>{
    const id = req.params.id * 1
    const movie = movies.find((element)=>{return element.id === id})

    if(!movie){
        return res.status(404).json({
            status:'fail',
            message : `Movie with ${id} id is not found`
        })
    }

    res.status(200).json({
        status: 'success',
        data:{
            movie : movie
        }
    })
})

// POST
app.post('/api/v1/movies',(req,res)=>{
    const newId = movies[movies.length -1].id + 1       // create id with inc from prev
    const newMovie = Object.assign({id:newId},req.body) // merge 2 obj i.e id and body(movie deatil)
    movies.push(newMovie)                               //push that obj in movies array
    
    fs.writeFile('./data/movies.json',JSON.stringify(movies),(err)=>{
        res.status(201).json(newMovie)
    }) 
})


app.patch('/api/v1/movies/:id', (req, res) => {
    const id = req.params.id * 1;
    const movieToUpdate = movies.find(movie => movie.id === id);

    if (!movieToUpdate) {
        return res.status(404).json({
            status: 'fail',
            message: 'Movie not found'
        });
    }

    Object.assign(movieToUpdate, req.body); // updates in-place

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to update movie data'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                movie: movieToUpdate
            }
        });
    });
});


app.put('/api/v1/movies/:id', (req, res) => {
    const id = req.params.id * 1;
    const movieIndex = movies.findIndex(movie => movie.id === id);

    if (movieIndex === -1) {
        return res.status(404).json({
            status: 'fail',
            message: 'Movie not found'
        });
    }

    // Replace the entire movie object
    const updatedMovie = { id, ...req.body };
    movies[movieIndex] = updatedMovie;

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to update movie data'
            });
        }

        res.status(200).json({
            status: 'success',
            data: {
                movie: updatedMovie
            }
        });
    });
});

app.delete('/api/v1/movies/:id', (req, res) => {
    const id = req.params.id * 1;
    const movieToDelete = movies.find(movie => movie.id === id);

    if (!movieToDelete) {
        return res.status(404).json({
            status: 'fail',
            message: 'Movie not found'
        });
    }

    const index = movies.indexOf(movieToDelete)
    movies.splice(index,1)

    fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Failed to delete movie'
            });
        }

        res.status(204).end()
    });
})

// create server
const PORT = 3000
app.listen(PORT,()=>{
    console.log('server has started');  
})