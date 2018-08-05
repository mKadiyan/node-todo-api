var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todos');
var {User} = require('./models/users');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo = new ToDo({
        text: req.body.text
    });

    todo.save().then((doc) =>{
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

    
});

app.get('/todos', (req, res)=>{
    ToDo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, ()=>{
  console.log('Started at port 3000');
});

module.exports = {app};



