const express = require('express')
const methodOverride = require('method-override')

const mongoConfig = require('./config')

const app = express()

const logRoute = require('./routes/logRoute')

const logs = require('./views/logs/New')

const port = 5000;



app.set('view engine', 'jsx')
app.engine('jsx',require('express-react-views').createEngine())

//Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())

app.use('/logs', logRoute)

app.listen(port, () => console.log('Listening on port: ', port))

mongoConfig()