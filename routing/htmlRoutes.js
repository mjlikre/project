var express = require('express');
var path = require('path');
var app = express();

module.exports = function(app){

    app.use((req, res)=>{
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

   



};