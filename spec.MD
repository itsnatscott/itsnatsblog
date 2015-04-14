Write a Blogging App for runnning a blog.
![alt text] (http://i.imgur.com/rXAx7p0.jpg) 

Through the browser should be able to:
1) See a list of all posts
- by going to "itsnatsblog" in browser
- reads in .ejs template and populates it with info from itsnatsblog.db databse 

2) View each post on its own page.
- going to "itsnatsblog/post/:id"
- reads in "show.ejs" template and populating it with info from itsnatsblog.db databse 

3) Create a new post with picture and text.
-by pressing "add new" button from "/itsnatsblog"
-reads in "new.ejs" template to "/itsnatsblog/new" which has appropriate fields for adding "headline" , "author" , "post body" , "pic url" in the on the template. 
- upon doing this the server saves the info into the database for access by other templates 

4) Edit the old posts. 
- by pressing the update button on the individual post page. which will render the "edit.ejs" template which has fields to edit any part of the post.
-it then updates the database with the new information.

5)Delete a post. 
- press delete button from the individual post page and it will remove that content from the database. and redirect you to the "/itsnatsblog" page to see that it is no longer there.

