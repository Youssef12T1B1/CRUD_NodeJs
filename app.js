const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const ejslayouts = require('express-ejs-layouts')
const bodyparser = require('body-parser')
const indexRoute = require('./routes/indexRoute')
const userRoute = require('./routes/userRoute')
const connectDb = require('./config/db')

connectDb()
const app = express()

// dotenv.config({path: './config/.env'})
const PORT = require('./config/.env').PORT || 5000

app.use(express.static('static'));

app.use(morgan('tiny'))

app.use(bodyparser.urlencoded({extended: true}))

//ejs
app.use(ejslayouts)
app.set('view engine', 'ejs')

//routes
app.use(indexRoute)
app.use(userRoute)




app.listen(PORT, console.log(`server running on port ${PORT}`))