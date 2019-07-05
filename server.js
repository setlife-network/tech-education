require('dotenv').config() //plugin environment variables
var express = require('express'); 
var path = require('path'); // path module to work with directories and files
var fs = require('fs'); //files module
var moment = require('moment'); //npm install moment -- for dates and times
const mysql = require('mysql');

var app = express(); //call express

var isProduction = process.env.NODE_ENV === 'production'; // fast feedback and loops
var port = isProduction ? process.env.PORT : 3000; //use port 3000


app.use(express.static(__dirname + '/public')); //middleware for static files (images, css, etc) 


app.get('*', function(req, res, next) { 
    // Prevents an HTML response for API calls
    console.log('get *')
    if (req.path.indexOf('/api/') != -1) {
      console.log('url has /api/') //1 nuevo
        return next();
    } console.log('url does not have /api/') //1 nuevo
    
    
    
    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text) {
        res.send(text);
        
    });
});
   

    //testing routes for the issue 28
app.get('/api/fetchCourses', (req,res) => {
    console.log('fetchCourses')
    
    const connection= mysql.createConnection({
        host     : 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user     : 'ya3jszaappent36v',
        password : 'k9r6ns2tezfkrjcg',
        database : 'sas2dvcw3k2a441b'
    })

    connection.query("SELECT * FROM Courses", (err, rows, fiels) => {
        res.json(rows)
    })

    //res.end()
})

app.get('/api/fetchCourse/:id', (req,res) => {
    console.log('Fetching courses by id' + req.params.id)
    const connection= mysql.createConnection({
        host     : 'q3vtafztappqbpzn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user     : 'ya3jszaappent36v',
        password : 'k9r6ns2tezfkrjcg',
        database : 'sas2dvcw3k2a441b'
    })
  
    const courseId = req.params.id
    const queryString ="SELECT * FROM Courses WHERE id = ?"
    connection.query(queryString, [courseId], (err, rows, fields) => {
        
        res.json(rows)
    })
    
})


//message when the server is running
app.listen(port, function() {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);

});