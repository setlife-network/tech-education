require('dotenv').config() //plugin environment variables
var express = require('express'); 
var path = require('path'); // path module to work with directories and files
var fs = require('fs'); //files module
var moment = require('moment'); //npm install moment -- for dates and times

var app = express(); //call express

var isProduction = process.env.NODE_ENV === 'production'; // fast feedback and loops
var port = isProduction ? process.env.PORT : 3000; //use port 3000


app.use(express.static(__dirname + '/public')); //middleware for static files (images, css, etc) 

app.get('*', function(req, res, next) { 
    // Prevents an HTML response for API calls
    if (req.path.indexOf('/api/') != -1) {
        return next();
    }

    fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text) {
        res.send(text);
    });
});

//message when the server is running
app.listen(port, function() {
    console.log('SetLife-ReactWithApi: Server running on port ' + port);
    // require('./api/handlers/github').fetchRepo({
    //     url: 'https://github.com/bitcoin/bitcoin'
    //     // url: 'https://github.com/setlife-network/tech-education'
    // })
});