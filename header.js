
// modules
var http = require('http');
var request = require('request');
var express = require('express');

// get public IP from 12.io using the request module (npm install request)
var ip;
request("http://www.l2.io/ip", function(error, response, body){
    if (error) throw error;
    ip = body;
});

// server
var app = express();

// create response object
var responseObj = {};

// index html
var html = "<h2>Header Parser Microservice</h2>" + 
           "<p>This microservice will supply your IP address and browser specifics in a JSON stringified format.</p>" +
           "<p>Point your http GET request here: " + 
            "<a href='https://fcc-headermicroservice.herokuapp.com/whoami'>" + 
            "https://fcc-headermicroservice.herokuapp.com/whoami</a></p>";

// route /
app.get('/', function (req, res){
    res.send(html);
});

// route /whoami
app.get('/whoami', function (req, res) {
    
    // assign ip
    responseObj.ip = ip;
    
    // assign language
    responseObj.language = navigator.language || "en";
    
    // OS 
    var appver = navigator.appVersion;
    var os = appver.slice( appver.indexOf("\(") + 1, appver.indexOf("\)") );
    responseObj.software = os;
    
    // send response object
    res.send(JSON.stringify(responseObj));
});

// listen
var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Now listening on port " + port);
});