var express = require ('express');
var app = express();
var swlite3 = require('sqlite3').verbose;
var db = new sqlite3.Database('blog.db');
var ejs = require('ejs');
app.set('view_engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', function(req,res){
	res.redirect('/itsnatsblog')
});

app.get('/itsnatsblog', function(req,res){

});