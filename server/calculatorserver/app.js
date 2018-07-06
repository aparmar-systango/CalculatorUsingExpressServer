var express = require('express');
var path = require('path');
var app = express();
app.get('/calculator/add',function(req,res){
    var num1 = Number(req.query.num1);
    var num2 = Number(req.query.num2);
    var result;
    try
    {
        result = num1+num2;
    }
    catch(error)
    {
        result = error.message;
    }
    res.send({result: result});
});
app.get('/calculator/substract',function(req,res){
    var num1 =  Number(req.query.num1);
    var num2 =  Number(req.query.num2);
    var result;
    try
    {
        result = num1-num2;
        result = result.toFixed(3);
    }
    catch(error)
    {
        result = error.message;
    }
    res.send({result: result});
});

app.get('/calculator/multiply',function(req,res){
    var num1 =  Number(req.query.num1);
    var num2 =  Number(req.query.num2);
    var result;
    try
    {
        result = num1*num2;
        result = result.toFixed(3);
    }
    catch(error)
    {
        result = error.message;
    }
    res.send({result: result});
});

app.get('/calculator/divide',function(req,res){
    var num1 =  Number(req.query.num1);
    var num2 =  Number(req.query.num2);
    var result;
    try
    {
        if(num2==0) {
            var errorObject = new Error();
            errorObject.message = "Number can not be divisible by zero";
            errorObject.name = "ArithmeticError";
            throw errorObject;
        }
        result = num1/num2;
        result  = result.toFixed(3);
    }
    catch(error)
    {
        result = error.message;
    }
    res.send({result: result});
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.listen(3000,()=>console.log("Express Server listening on port Number : 3000"));