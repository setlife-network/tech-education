require('dotenv').config() //plugin environment variables
var sequelize = require('./api/models').sequelize;
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
var port = isProduction ? process.env.PORT : 4000; //use port 3000


app.use(express.static(__dirname + '/build')); //middleware for static files (images, css, etc) 
app.use(bodyParser.json());

app.get('*', function (req, res, next) {
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }


    fs.readFile(__dirname + '/build/index.html', 'utf8', function (err, text) {
        res.send(text);

    });
});

// Required to fix CORS errors when making requests
var cors = require('cors');

var whitelist = [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://tech-education.herokuapp.com/'
];
var corsOptions = {
    origin: function(origin, callback) {
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,OPTIONS'],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control']
};
app.use(cors(corsOptions));


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

const {
    fetchCourses,
    fetchCoursesById,
    createCourses,
    updateCourses,
    deleteCourses,
    fetchCoursesByLanguage,

    fetchTopicsByLanguage,
    fetchTopicsByCourseId,
    fetchTopicsByTopicId,
    fetchTopics,
    createTopics,
    updateTopics,
    deleteTopics,

    fetchUsers,
    createUsers,
    updateUsers,
    deleteUsers,

    fetchFeedback,
    createFeedback,
    updateFeedback,
    deleteFeedback,

} = apiModules.crud

//COURSES
app.get('/api/fetchCourses/:id', (req, res) => {
    fetchCoursesById({ courseId: req.params.id }).then(res.json)
})
app.get('/api/fetchCourses', (req, res) => {
    fetchCourses({}).then(res.json)
})
app.post('/api/courses', (req, res) => {
    createCourses({ values: req.body }).then(res.json)
})
app.patch('/api/courses', (req, res) => {
    updateCourses({ values: req.body }).then(res.json)
})
app.delete('/api/courses', (req, res) => {
    deleteCourses({ values: req.body }).then(res.json)
})
app.get('/api/fetchCoursesByLanguage/:language_id', (req, res) => {
    createCourses({ languageId: req.params.language_id }).then(res.json)
})


//TOPICS
app.get('/api/fetchTopics', apiModules.crud.fetchTopics)
app.get('/api/fetchTopics/:id', apiModules.crud.fetchTopicsByTopicId)
app.get('/api/fetchTopicsByCourse/:course_id', apiModules.crud.fetchTopicsByCourseId)
app.post('/api/topics', apiModules.crud.createTopics)
app.patch('/api/topics', apiModules.crud.updateTopics)
app.delete('/api/topics', apiModules.crud.deleteTopics)
app.get('/api/fetchTopicsByLanguage/:language_id', apiModules.crud.fetchTopicsByLanguage)

//USERS read without hashed_password
app.get('/api/fetchUsers', apiModules.crud.fetchUsers)
app.post('/api/users', apiModules.crud.createUsers)
app.patch('/api/users', apiModules.crud.updateUsers)
app.delete('/api/users', apiModules.crud.deleteUsers)

//FEEDBACK
app.get('/api/fetchFeedback', apiModules.crud.fetchFeedback)
app.post('/api/feedback', apiModules.crud.createFeedback)
app.patch('/api/feedback', apiModules.crud.updateFeedback)
app.delete('/api/feedback', apiModules.crud.deleteFeedback)

//message when the server is running

app.listen(port, function () {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);
    
});
