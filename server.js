var express = require ('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('blog.db');
var ejs = require('ejs');
app.set('view_engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', function(req,res){
	res.redirect('/blogs')
});
//show all posts
app.get('/blogs', function(req,res){
	db.all("SELECT * FROM posts", function(err,data){
		if (err) {
			console.log(err);
		}else{
			var posts = data;
			console.log(posts);
		}
		res.render("index.ejs", {post : posts});
	});

});
//show individual post
app.get ("/blog/:id", function(req,res){
	var id = req.params.id
	db.get("SELECT * FROM posts WHERE id = ?",id,function(err,data){
console.log(data,req.params.id)
	item = data
res.render('show.ejs', {thisBlog: item})
	});
});

//make new post
app.get('/blogs/new', function(req, res){
	res.render('new.ejs')
})










app.listen(3000);
console.log("Listening 3000")