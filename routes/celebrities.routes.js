// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// all your routes here
const Celebrity = require('../models/Celebrity.model')

router.get('/', async (req, res, next) => {
    try {
        const allCelebs = await Celebrity.find()
        console.log(allCelebs)
        res.render('celebrities/celebrities', { celebrities: allCelebs})        
    } catch (error) {
        console.log(error)
    }
})

router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
})

router.post('/create', async (req, res) => {
    try{
        const newCeleb = await Celebrity.create({
            ...req.body
        })
        console.log(newCeleb)
        res.redirect(`/celebrities`)
    } catch (error) {
        console.log(error)
        res.render('celebrities/new-celebrity')
    }
})

module.exports = router