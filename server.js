var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var knex = require('./connect.js');
app.use(bodyParser());

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'navgurukul',
    database: 'notes'
});

// connection
mysqlConnection.connect((err) => {
    if (err) throw err;
    console.log('mysql connected.....')
})

// this endpoint to get the whole data at a one time.
app.get('/get', (req, res) => {
    knex.select('*').from('notesInformation')
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err)
    })
})

// this endpoint to get the data by searching name
app.get('/getSearch', (req, res) => {
    knex('notesInformation').where('Title', 'environment')
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.send(err)
    })
})

// this endpoint to get the data by id wise
app.get('/notes/:id', (req, res) => {
    var id = req.params.id
    knex.select('*').from('notesInformation')
    .where('notesInformation.Id', id)
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.send(err);
    })
})

// this endpoint for post tha data to database from postman
app.post('/post', (req, res) => {
    var data = {
        'Title': req.body.Title,
        'Name': req.body.Name
    }
    knex('notesInformation').insert(data)
    .then((data) => {
        console.log('posted....')
        res.send('posted....')
    })
})

// this endpoint for update the data by id
app.put('/update/:id', (req, res) => {
    knex('notesInformation')
    .where('id', req.params.id)
    .update({
        'Title': req.body.Title,
        'Name': req.body.Name
    })
    .then((data) => {
        console.log('updated....')
        res.send('updated....')
    })
    .catch((err) => {
        res.send(err);
    })
})

// this endpoint for delete tha data by id 
app.delete('/delete/:id', (req, res) => {
    knex('notesInformation')
    .where('id', req.params.id)
    .delete()
    .then(() => {
        console.log('deleted....')
        res.send('deleted...')
    })
    .catch((err) => {
        res.send(err)
    })
})

app.listen(8000, () => {
    console.log('server started on port 8000');
})