const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Restau = require('./models/rest')

const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/restaurant-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: 'hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  Restau.find()
    .lean()
    .then(Restau => res.render('index', { Restau }))
    .catch(error => console.error(error))
})

app.listen(port, () => {
  console.log('connect!')
})
