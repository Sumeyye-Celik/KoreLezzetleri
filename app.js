const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3000;
const hostname = '127.0.0.1'
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo');

mongoose.connect('mongodb://127.0.0.1/korelezzetleri_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


app.use(expressSession({
  secret: 'anahtar',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create(
    { mongoUrl: 'mongodb://127.0.0.1/korelezzetleri_db' })
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))
app.use(express.static('css'))

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const main = require('./routers/main')
app.use('/', main)
const users = require('./routers/users')
app.use('/users', users)

app.use((req, res, next) => {
  const { userId } = req.session
  if (userId) {
    res.locals = {
      displayLink: true
    }
  } else {
    res.locals = {
      displayLink: false
    }
  }
  next()
})


app.listen(port, hostname, () => {
  console.log(`Server çalışıyor, http://${hostname}:${port}/`);
});