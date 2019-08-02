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
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
});

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });
});


//testing routes for the issue 28
//ROUTES FOR COURSES
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


app.get('/api/fetchCourses/:id', (req, res) => {
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
//PUT route OK (no needed)
app.put('/api/courses/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            connection.query('UPDATE Courses SET title= ?, description=?, current_version=?, youtube_link=? WHERE id=?', [req.body.title, req.body.description, req.body.current_version, req.body.youtube_link, req.body.id], (err, rows) => {
                res.end(JSON.stringify(rows));
            })
        }
    })

}),

    //POST route OK (for create)
    app.post('/api/courses/', (req, res) => {
        pool.getConnection(function (error, connection) {
            if (error) {
                console.log('Error!!');
                connection.release();
            } else {
                connection.query('INSERT INTO Courses(id, title, description, current_version, youtube_link) values(?,?,?,?,?)', [req.body.id, req.body.title, req.body.description, req.body.current_version, req.body.youtube_link], (err, rows) => {
                    res.end(JSON.stringify(rows));
                })
            }
        })
    })

//PATCH route OK (modify some values)
app.patch('/api/courses/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            connection.query('UPDATE Courses SET title= ?, description=? WHERE id=?', [req.body.title, req.body.description, req.body.id], (err, rows) => {
                res.end(JSON.stringify(rows));
            })
        }
    })
})


//DELETE route OK
app.delete('/api/courses', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            const id = req.body.id
            var queryString = "DELETE FROM Courses WHERE id = ?";
            connection.query(queryString, [id], (err, rows, fields) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })

})

//TOPICS
//read
app.get('/api/fetchTopics/', (req, res) => {
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

//POST route OK (for create) issues with "order"
app.post('/api/topics/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            connection.query('INSERT INTO Topics(id, title, order, rich_text_content, course_id) values (?,?,?,?,?)', [req.body.id, req.body.title, req.body.order, req.body.rich_text_content, req.body.course_id], (err, rows) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })
})

//PATCH route OK (modify some values)
app.patch('/api/topics/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            connection.query('UPDATE Topics SET title= ? WHERE id=?', [req.body.title, req.body.id], (err, rows) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })
})

//DELETE
app.delete('/api/topics', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            const id = req.body.id
            var queryString = "DELETE FROM Topics WHERE id = ?";
            connection.query(queryString, [id], (err, rows, fields) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })

})

//USERS read without hashed_password
app.get('/api/fetchUsers/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            var queryString = "SELECT id, email, date_registered, google_id FROM Users"; 
            connection.query(queryString, (err, rows, fields) => {
                res.json(rows)
                connection.release();
            })
        }
    })
})

app.post('/api/users/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log("inside post")
            connection.query('INSERT INTO Users(id, email, hashed_password, date_registered, google_id ) values (?,?,?,?,?)', [req.body.id, req.body.email, req.body.hashed_password, req.body.date_registered, req.body.google_id], (err, rows) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })
})
app.patch('/api/users/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            connection.query('UPDATE Users SET email= ? WHERE id=?', [req.body.email, req.body.id], (err, rows) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })
})

app.delete('/api/users', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            var queryString = "DELETE FROM Users WHERE id = ?";
            connection.query(queryString, [req.body.id], (err, rows, fields) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })

})

//FEEDBACK
app.get('/api/fetchFeedback/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            var queryString = "SELECT * FROM Feedback";
            connection.query(queryString, (err, rows, fields) => {
                res.json(rows)
                connection.release();
            })
        }
    })
})

app.post('/api/feedback/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log("inside post")
            connection.query('INSERT INTO Feedback(id, topic_id, user_id, text, date_created, adapter_direction ) values(?,?,?,?,?,?)', [req.body.id, req.body.topic_id, req.body.user_id, req.body.text, req.body.date_created, req.body.adapter_direction], (err, rows) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })
})

app.patch('/api/feedback/', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            connection.query('UPDATE Feedback SET text= ? WHERE id=?', [req.body.text, req.body.id], (err, rows) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })
})
app.delete('/api/feedback', (req, res) => {
    pool.getConnection(function (error, connection) {
        if (error) {
            console.log('Error!!');
            connection.release();
        } else {
            console.log('Succes')
            var queryString = "DELETE FROM Feedback WHERE id = ?";
            connection.query(queryString, [req.body.id], (err, rows, fields) => {
                res.end(JSON.stringify(rows));
                connection.release();
            })
        }
    })

})
//message when the server is running
app.listen(port, function () {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);

});