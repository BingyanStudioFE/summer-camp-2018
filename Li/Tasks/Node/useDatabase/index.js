// const express = require('express');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
 
// const app = new express();
// app.use(function(req,res,next){
//     console.log('1');
//     next();
// })
// app.use(function(req,res,next){
//     console.log('2');
//     res.status(200).end();
// })
// app.listen(3000);
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("rabbit");
//     var myobj = { name: "lyh" };
//     dbo.collection("site").insertOne(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("你倒是连上啊");
//         db.close();
//     });
// });