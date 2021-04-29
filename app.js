const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const Restau = require('./models/rest')
const bodyParser = require('body-parser')

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
app.use(bodyParser.urlencoded({ extended: true }))

//首頁
app.get('/', (req, res) => {
  Restau.find()
    .lean()
    .then(Restau => res.render('index', { Restau }))
    .catch(error => console.error(error))
})

//瀏覽新增頁面
app.get('/restaurant/new', (req, res) => {
  res.render('new')
})

//瀏覽特定頁面
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restau.findById(id)
    .lean()
    .then(Restau => res.render('show', { Restau }))
    .catch(error => console.error(error))
})

//新增餐廳
app.post('/restaurant/new', (req, res) => {
  console.log(req.body)
  res.render('new')
})

//搜尋




app.listen(port, () => {
  console.log('connect!')
})
