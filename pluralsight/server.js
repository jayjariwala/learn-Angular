const express = require('express'),
stylus = require('stylus'),
logger = require('morgan'),
bodyParser = require('body-parser'),
path = require('path'),
mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str,path)
{
	return stylus(str).set('filename',path);
}

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(stylus.middleware(
{
	src: __dirname + '/public',
	compile:compile
}))


app.use(express.static('public'))

app.set('views', __dirname + '/server/views');

app.set('view engine','jade');

app.get('/partials/:partialPath',function(req,res){
	res.render('partials/' + req.params.partialPath ); 
})

app.get('*',function(req,res){
	res.render('index');
})

mongoose.connect('mongodb://demo:demo@ds161032.mlab.com:61032/multivision',{useMongoClient: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
});


var port = 8000;
app.listen(port);

console.log("listening to port "+ port);

