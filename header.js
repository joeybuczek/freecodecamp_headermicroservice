
// modules
var http = require('http');
var request = require('request');
var express = require('express');

// get public IP from 12.io using the request module (npm install request)
var ip;
request("http://www.l2.io/ip", function(error, response, body){
    if (error) throw error;
    ip = body;
    console.log(ip);
});

// server
var app = express();

    
    

    






// listen
var port = process.env.port || 8080;
app.listen(port, function(){
    console.log("Now listening on port " + port);
});