const mysql = require('mysql');

//declaration enviroment variables:
var host = MYSQL.DB_HOST;
var username = MYSQL.DB_USERNAME;
var password = MYSQL.DB_PASSWORD;
var db = MYSQL.DB_NAME;

var crud = module.exports = (function() {

    var pool = mysql.createPool({
        connectionLimit: 10,
        host: host,
        user: username,
        password: password,
        database: db,
    });

    const fetchCourses = (res, req) => {
        console.log('crud.fetchCourses')
    }

    return {
        fetchCourses
    };
})();