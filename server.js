require('dotenv').config() //plugin environment variables
var express = require('express');
var path = require('path'); // path module to work with directories and files
var fs = require('fs'); //files module
var moment = require('moment'); //npm install moment -- for dates and times
const bodyParser = require('body-parser');
const mysql = require('mysql');
const { MYSQL } = require('./config/credentials');

var app = express();

var http = require('http').createServer(app); //chat
var io = require('socket.io')(http);//chat

var isProduction = process.env.NODE_ENV === 'production'; // fast feedback and loops
var port = isProduction ? process.env.PORT : 3000; //use port 3000


app.use(express.static(__dirname + '/public')); //middleware for static files (images, css, etc) 
app.use(bodyParser.json());

app.get('*', function (req, res, next) {
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }


    fs.readFile(__dirname + '/public/index.html', 'utf8', function (err, text) {
        res.send(text);

    });
});

//chat 
app.get('/api/chat/', function (req, res) {
    res.sendFile(__dirname + '/index.html');

});
io.on('connection', function (socket) {
    socket.on('disconnect', function () {
    });
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
    });
});

const apiModules = require('./api/modules')


//COURSES
app.get('/api/fetchCourses/', apiModules.crud.fetchCourses)
app.get('/api/fetchCourses/:id', apiModules.crud.fetchCoursesById)
app.post('/api/courses/', apiModules.crud.createCourses)
app.patch('/api/courses/', apiModules.crud.updateCourses)
app.delete('/api/courses/', apiModules.crud.deleteCourses)

//TOPICS
app.get('/api/fetchTopics/', apiModules.crud.fetchTopics)
app.post('/api/topics/', apiModules.crud.createTopics)
app.patch('/api/topics/', apiModules.crud.updateTopics)
app.delete('/api/topics', apiModules.crud.deleteTopics)

//USERS read without hashed_password
app.get('/api/fetchUsers/', apiModules.crud.fetchUsers)
app.post('/api/users/', apiModules.crud.createUsers)
app.patch('/api/users/', apiModules.crud.updateUsers)
app.delete('/api/users/', apiModules.crud.deleteUsers)

//FEEDBACK
app.get('/api/fetchFeedback/', apiModules.crud.fetchFeedback)
app.post('/api/feedback/', apiModules.crud.createFeedback)
app.patch('/api/feedback/', apiModules.crud.updateFeedback)
app.delete('/api/feedback/', apiModules.crud.deleteFeedback)

//message when the server is running
app.listen(port, function () {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);

});