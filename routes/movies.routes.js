// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
const Movie = require('../models/Movie.model')
const Celebrity = require('../models/Celebrity.model')

router.get('/', async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        const allCelebs = await Celebrity.find()
        console.log(allMovies)
        res.render('movies/movies', { movies: allMovies})
        res.render('movies/movies', { celebrities: allCelebs})  
    } catch (error) {
        console.log(error)
    }
})

router.get('/create', (req, res) => {
    res.render('movies/new-movie')
})

router.post('/create', async (req, res) => {
    try{
        const newMovie = await Movie.create({
            ...req.body
        })
        console.log(newMovie)
        res.redirect(`/movies`)
    } catch (error) {
        console.log(error)
        res.render('movies/new-movie')
    }
})

router.get('/:movieId', async (req, res) => {
    
    try {
      const recipe = await Recipe.findById(req.params.recipeId)
      console.log(recipe)
      if (!recipe) {
        res.redirect('/recipes')
      } else {
        res.render('recipes/one', recipe)
      }
    } catch (error) {
      console.log(error)
    }
  })

module.exports = router