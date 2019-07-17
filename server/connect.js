var express = require('express')
var bodyParser = require('body-parser')
var mysql = require('mysql')
var app = express()
var cookieParser = require('cookie-parser')
var session = require('express-session')
const bcrypt = require('bcrypt');

app.use(bodyParser.json())

app.use(session({
  secret: 'secret',
	resave: true,
  saveUninitialized: true
}));

app.use(cookieParser())

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'demo_api'
})

connection.connect(function(err) {
  if(err) throw err;
  console.log('db connected')
})

require('./api/users')(connection, app, bcrypt)
require('./api/login')(connection, app)


