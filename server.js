require('dotenv').config() //plugin environment variables
// Required to fix CORS errors when making requests
const express = require('express');
const path = require('path'); // path module to work with directories and files
const fs = require('fs'); //files module

const moment = require('moment'); //npm install moment -- for dates and times
const bodyParser = require('body-parser');

const app = express();

const http = require('http').createServer(app); //chat
const io = require('socket.io')(http);//chat

const isProduction = process.env.NODE_ENV === 'production'; // fast feedback and loops
const port = isProduction ? process.env.PORT : 4000; //use port 3000

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

const cors = require('cors');

const whitelist = [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://tech-education.herokuapp.com/'
];
const corsOptions = {
    origin: function(origin, callback) {
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true,
    methods: ['GET,PUT,POST,DELETE,OPTIONS'],
    allowedHeaders: ['Access-Control-Allow-Headers', 'Origin', 'Access-Control-Allow-Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cache-Control']
};
app.use(cors(corsOptions));


// Websocket testing (for future use) 
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
    fetchCourseById,
    fetchCoursesByLanguage,
    createCourse,
    updateCourse,
    deleteCourse,

    fetchTopics,
    fetchTopicsByLanguage,
    fetchTopicsByCourse,
    fetchTopicsById,
    createTopic,
    updateTopic,
    deleteTopic,

    fetchUsers,
    createUser,
    updateUser,
    deleteUser,

    fetchFeedback,
    createFeedback,
    updateFeedback,
    deleteFeedback,

} = apiModules.crud

// Courses
app.get('/api/fetchCourses', (req, res) => {
    fetchCourses({}).then(data => res.json(data))
})
app.get('/api/fetchCourse/:id', (req, res) => {
    fetchCourseById({ courseId: req.params.id }).then(data => res.json(data))
})
app.get('/api/fetchCoursesByLanguage/:language_id', (req, res) => {
    fetchCoursesByLanguage({ languageId: req.params.language_id }).then(data => res.json(data))
})
app.post('/api/courses', (req, res) => {
    createCourse({ values: req.body }).then(data => res.json(data))
})
app.patch('/api/courses/:id', (req, res) => {
    updateCourse({ 
        courseId: req.params.id,
        updateFields: req.body
    })
    .then(data => res.json(data))
})
app.delete('/api/courses/:id', (req, res) => {
    deleteCourse({ courseId: req.params.id }).then(data => res.json(data))
})

// Topics
app.get('/api/fetchTopics', (req, res) => {
    fetchTopics({}).then(data => res.json(data))
})
app.get('/api/fetchTopics/:id', (req, res) => {
    fetchTopicsById({ topicId: req.params.id }).then(data => res.json(data))
})
app.get('/api/fetchTopicsByCourse/:course_id', (req, res) => {
    fetchTopicsByCourse({ courseId: req.params.id }).then(data => res.json(data))
})
app.get('/api/fetchTopicsByLanguage/:language_id', (req, res) => {
    fetchTopicsByLanguage({ languageId: req.params.language_id }).then(data => res.json(data))
})
app.post('/api/topics', (req, res) => {
    createTopic({ values: req.body }).then(data => res.json(data))
})
app.patch('/api/topics/:id', (req, res) => {
    updateTopic({ 
        topicId: req.params.id,
        updateFields: req.body
    })
    .then(data => res.json(data))
})
app.delete('/api/topics/:id', (req, res) => {
    deleteTopic({ topicId: req.params.id }).then(data => res.json(data))
})

// Users
app.get('/api/fetchUsers', (req, res) => {
    fetchUsers({}).then(data => res.json(data))
})
app.post('/api/users', (req, res) => {
    createUser({ values: req.body }).then(data => res.json(data))
})
app.patch('/api/users/:id', (req, res) => {
    updateUser({ 
        userId: req.params.id,
        updateFields: req.body
    })
    .then(data => res.json(data))
})
app.delete('/api/users/:id', (req, res) => {
    deleteUser({ userId: req.params.id }).then(data => res.json(data))
})

// Feedbacks
app.get('/api/fetchFeedback', (req, res) => {
    fetchFeedback({}).then(data => res.json(data))
})
app.post('/api/feedback', (req, res) => {
    createFeedback({ values: req.params }).then(data => res.json(data))
})
app.patch('/api/feedback/:id', (req, res) => {
    updateFeedback({ 
        feedbackId: req.params.id,
        updateFields: req.body
    })
    .then(data => res.json(data))
})
app.delete('/api/feedback/:id', (req, res) => {
    deleteFeedback({ feedbackId: req.params.id }).then(data => res.json(data))
})

app.listen(port, function () {
    console.log('TechEducation-ReactWithApi: Server running on port ' + port);
    
});
