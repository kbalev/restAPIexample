const { Router } = require('express');
const { createMovie, getMovie, getMovies, updateMovie } = require('../controllers/movie.controllers')
const movieRouter = Router();

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies', getMovies);
movieRouter.get('/movies/:id', getMovie);
movieRouter.put('./movies/:id', updateMovie)


module.exports = movieRouter;