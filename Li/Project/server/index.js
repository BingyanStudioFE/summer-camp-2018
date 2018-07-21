const express = require('express');
const path = require('path');
const app = new express();
app.use(express.static(__dirname + '/dist'));
app.get('/',function(req,res){
    res.sendFile('index.html');
});
app.listen(3000,function(){
    console.log('connected!');
});