const sql = require('../db/connection')

exports.createMovie = (req, res) => {
    try {
        const movie = {
            title: req.body.title,
            watched: true,
            user: req.body.user,
            token: req.headers.authorisation
        };
        sql.query("insert into movieusers() ")
        res.status(200).send( { movie: movie, message: 'Movie successfully created.'
        })
    } catch (error) {
        res.status(500).send({
            message: 'no movie created'
        })
    }
}
exports.getMovies = (req, res) =>{
    try {
        res.send(movies)
    } catch (error) {
        res.send(error)
    }
}
exports.getMovie = (req, res) =>{
        const movie = movies.find(c => c.id === parseInt(req.params.id))
        if (!movie) res.status(404).send('the movie was not found')
        res.send(movie)
}

exports.updateMovie = (req,res) =>{
    const movie = movies.find(c => c.id === parseInt(req.params.id))
        if (!movie) res.status(404).send('the movie was not found');
        movie.title = req.body.title;
        res.send(movie)
}
//needs read, update, delete