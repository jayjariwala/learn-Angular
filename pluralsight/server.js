const express = require('express'),
stylus = require('stylus'),
logger = require('morgan'),
bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path)
{
	return stylus(str).set('filename',path);
}

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.set('views', __dirname + '/server/views');

app.set('view engine','jade');

app.get('*',function(req,res){
	res.render('index');
})


app.use(express.static(__dirname + '/public'));


var port = 3032;
app.listen(port);

console.log("listening to port "+ port);

