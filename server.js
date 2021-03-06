var express = require('express');
var app = express();
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('blog.db');
var ejs = require('ejs');
app.set('view_engine', 'ejs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
	extended: false
}));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.get('/', function(req, res) {
	res.redirect('/blogs')
});
//show all posts
app.get('/blogs', function(req, res) {
	db.all("SELECT * FROM posts", function(err, data) {
		if (err) {
			console.log(err);
		} else {
			var posts = data;
		}
		res.render("index.ejs", {
			post: posts
		});
	});

});
//show individual post
app.get("/blog/:id", function(req, res) {
	var id = req.params.id
	db.get("SELECT * FROM posts WHERE id = ?", id, function(err, data) {
		item = data
		res.render('show.ejs', {
			thisBlog: item
		})
	});
});

//render page to make new post
app.get('/blogs/new', function(req, res) {
	res.render('new.ejs');
});
//create new post
app.post("/blogs", function(req, res) {
	db.run("INSERT INTO posts (title, pic, author, post) VALUES (? , ? , ? , ? )", req.body.title, req.body.pic, req.body.author, req.body.post, function(err) {
		if (err) console.log(err);
	})
			res.redirect('/blogs');
});

//send user to edit form
app.get("/blog/:id/edit", function(req,res){
	var id = req.params.id
	db.get("SELECT * FROM posts WHERE id = ?", id, function(err, data) {
		item = data
		res.render('edit.ejs', {
			thisBlog: item
		})
	});
});

//update the post
app.put('/blog/:id', function(req, res){
    var id = req.params.id
    db.run("UPDATE posts SET title = ?, author = ?, post = ?, pic = ? WHERE id = ?", req.body.title, req.body.author, req.body.post, req.body.pic , id, function(err) {
        if (err) console.log(err);
        res.redirect('/blog/' + id)
    });
});

//delete a post
app.delete("/blog/:id", function(req, res) {
	var id = req.params.id
	db.run("DELETE FROM posts WHERE id = ?", id, function(err) {
		if (err) console.log(err);
		res.redirect('/')
	});
});



app.listen(3000);
console.log("Listening 3000")



