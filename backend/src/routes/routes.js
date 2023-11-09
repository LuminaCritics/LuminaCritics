const express = require('express')


const Auth = require('./routerAuth')
const Tutorial = require('./routerTutorial')

const app = express()


app.use('/auth', Auth)
app.use('/tutorial',Tutorial)




module.exports = app;