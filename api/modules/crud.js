const mysql = require('mysql');
const { MYSQL } = require('../../config/credentials');

//declaration enviroment variables:
var host = MYSQL.DB_HOST;
var username = MYSQL.DB_USERNAME;
var password = MYSQL.DB_PASSWORD;
var db = MYSQL.DB_NAME;

var crud = module.exports = (function () {

    var pool = mysql.createPool({
        connectionLimit: 10,
        host: host,
        user: username,
        password: password,
        database: db,
    });

    const fetchCourses = (req, res) => {
        console.log('crud.fetchCourses')
        pool.getConnection(function (error, connection) {
            if (error) {
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


    }
    const fetchCoursesById = (req, res) => {
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

    }
    const Courses = (req, res) => {
        pool.getConnection(function (error, connection) {
            if (error) {
                console.log('Error!!');
                connection.release();
            } else {
                connection.query('UPDATE Courses SET title= ?, description=?, current_version=?, youtube_link=? WHERE id=?', [req.body.title, req.body.description, req.body.current_version, req.body.youtube_link, req.body.id], (err, rows) => {
                    res.end(JSON.stringify(rows));
                    connection.release();
                })
            }
        })

        pool.getConnection(function (error, connection) {
            if (error) {
                console.log('Error!!');
                connection.release();
            } else {
                connection.query('INSERT INTO Courses(id, title, description, current_version, youtube_link) values(?,?,?,?,?)', [req.body.id, req.body.title, req.body.description, req.body.current_version, req.body.youtube_link], (err, rows) => {
                    res.end(JSON.stringify(rows));
                    connection.release();
                })
            }
        })


        pool.getConnection(function (error, connection) {
            if (error) {
                console.log('Error!!');
                connection.release();
            } else {
                connection.query('UPDATE Courses SET title= ?, description=? WHERE id=?', [req.body.title, req.body.description, req.body.id], (err, rows) => {
                    res.end(JSON.stringify(rows));
                    connection.release();
                })
            }
        })
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

    }
    const fetchTopics = (req, res) => {
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
    }
    const Topics = (req, res) => {
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
    }
    const fetchUsers = (req, res) => {
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


    }
    const Users = (req, res) => {
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
    }
    const fetchFeedback = (req, res) => {
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
        
    }
    const Feedback = (req, res) => {
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
    }
    return {
        fetchCourses,
        fetchCoursesById,
        Courses,
        fetchTopics,
        Topics,
        fetchUsers,
        Users,
        fetchFeedback,
        Feedback,
    };
})();