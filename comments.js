// create web server with express
const express = require('express');
const app = express();
// import body-parser to parse request body
const bodyParser = require('body-parser');
// import comment model
const Comment = require('./comment');

// use body parser to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// create a new comment
app.post('/comment', (req, res) => {
  // create a new comment
  const newComment = new Comment({
    name: req.body.name,
    email: req.body.email,
    comment: req.body.comment
  });

  // save the comment
  newComment.save()
    .then(comment => {
      res.send(comment)
    }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Comment."
    });
  });
});

