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
app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  return Restau.findById(id)
    .lean()
    .then(Restau => res.render('show', { Restau }))
    .catch(error => console.error(error))
})

//新增餐廳
app.post('/restaurant/new', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  return Restau.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))

})

//刪除
app.post('/restaurant/:id/delete', (req, res) => {
  const id = req.params.id
  return Restau.findById(id)
    .then(rest => rest.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.error(error))
})

//瀏覽修改頁面
app.get('/restaurant/update/:id', (req, res) => {
  const id = req.params.id
  return Restau.findById(id)
    .lean()
    .then(Restau => res.render('update', { Restau }))
    .catch(error => console.error(error))
})

//修改
app.post('/restaurant/update/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const google_map = req.body.google_map
  const phone = req.body.phone
  const description = req.body.description
  return Restau.findById(id)
    .then(rest => {
      rest.name = name
      rest.name_en = name_en
      rest.category = category
      rest.image = image
      rest.location = location
      rest.google_map = google_map
      rest.phone = phone
      rest.description = description
      return rest.save()
    })
    .then(() => res.redirect(`/restaurant/${id}`))
    .catch(error => console.error(error))

})

//搜尋




app.listen(port, () => {
  console.log('connect!')
})
