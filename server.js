// Imports and port
const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Renders
app.get('', (req, res) => {
    res.render('menu')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/index', (req, res) => {
    res.render('index')
})

// views engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.urlencoded({extended: false})) //use fields from username and password

// Listens on port
app.listen(port, () => console.info(`Listening on port ${port}`));