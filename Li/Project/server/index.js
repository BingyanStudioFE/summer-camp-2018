const express = require('express');
const path = require('path');
const app = new express();
app.use(express.static(__dirname + '/dist'));
app.get('/',function(req,res){
    res.sendFile('index.html');
});
app.get('/login',function(){
    console.log('server connected')
});
app.listen(3000,function(){
    console.log('connected!');
});