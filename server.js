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
    console.log('get *')
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }


    fs.readFile(__dirname + '/public/index.html', 'utf8', function (err, text) {
        res.send(text);

    });
});

//declaration enviroment variables:
var host = MYSQL.DB_HOST;
var username = MYSQL.DB_USERNAME;
var password = MYSQL.DB_PASSWORD;
var db = MYSQL.DB_NAME;

var pool = mysql.createPool({
    connectionLimit: 10,
    host: host,
    user: username,
    password: password,
    database: db,
});

//chat 
app.get('/api/chat/', function (req, res) {
    console.log("dentro del chat")
    res.sendFile(__dirname + '/index.html');
   
});
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
    });
  });


//testing routes for the issue 28
app.get('/api/fetchCourses', (req, res) => {
    console.log('fetchCourses')
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Connected!!')
            connection.query('SELECT * FROM Courses', function (error, rows, fields) {
                console.log('devuelve datos')
                res.json(rows)
                connection.release()
            })

        }
    })

})


app.get('/api/fetchCourse/:id', (req, res) => {
    console.log('Fetching courses by id' + req.params.id)
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            const courseId = req.params.id
            const queryString = "SELECT * FROM Courses WHERE id = ?"
            connection.query(queryString, [courseId], (err, rows, fields) => {
                res.json(rows)
                connection.release();
            })

        }

    })
})

app.get('/api/fetchTopics/', (req, res) => {
    console.log('Fetching topics by course id' + req.params.id)
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            const courseId = req.params.id
            var queryString = "SELECT * FROM Topics";
            connection.query(queryString, [courseId], (err, rows, fields) => {
                res.json(rows)
                connection.release();
            })
        }
    })
})
//PUT route
app.put('/api/course/update', (req, res) => {
    console.log("inside PUT")
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log("dentro de PUT")
            connection.query('UPDATE Courses SET title= ?, description=?, current_version=?, youtube_link=? WHERE id=?', [req.body.title, req.body.description, req.body.current_version, req.body.youtube_link, req.body.id], (err, rows) => {
                res.end(JSON.stringify(rows));
            })
        }
    })

})
//POST route
app.post('/api/course', (req, res) => {
    console.log("inside post")
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log("dentro de post")
            connection.query('INSERT INTO Courses(id, title, description, current_version, youtube_link) values(?,?,?,?,?)', [req.body.id, req.body.title, req.body.description, req.body.current_version, req.body.youtube_link], (err, rows) => {
                res.end(JSON.stringify(rows));
            })
        }
    })


})

//DELETE route
app.delete('/api/fetchCourses/delete/:id', (req, res) => {
    console.log("inside delete")
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            const id = req.params.id
            var queryString = "DELETE FROM Courses WHERE id = ?";
            connection.query(queryString, [id], (err, rows, fields) => {
                res.end(JSON.stringify(rows));
                console.log("dentro query")
                connection.release();
            })
        }
    })

})



//message when the server is running
app.listen(port, function () {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);

});