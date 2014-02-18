
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
<<<<<<< HEAD
=======
var pg = require('pg');
var conString = process.env.DATABASE_URL;
>>>>>>> a0719f5b2d262371e19cece96d73bf6d0157becf

var app = express();

// all environments
<<<<<<< HEAD
app.set('port', process.env.PORT || 8888);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
=======
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
>>>>>>> a0719f5b2d262371e19cece96d73bf6d0157becf
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

<<<<<<< HEAD
var pg = require('pg');


app.get('/', function(req, res){
	var data;
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
		client.query('SELECT * FROM users', function(err, result) {
			done();
			if(err) return console.error(err);
			console.log(result.rows);
			res.render('home.ejs', { title: 'Thanh Tam', data: result.rows });
		});
	});

});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
=======
var client = new pg.Client(conString);


app.get('/', routes.index);

app.get('/users', function(req, res){
	client.connect(function(err) {
		if(err) {
			return console.error('could not connect to postgres', err);
		}
		client.query('SELECT * FROM users', function(err, result) {
			if(err) {
				return console.error('error running query', err);
			}
			console.log('Result: ' + result.rows[0].username);
			//output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
			client.end();
		});
	});
	res.send("respond with a resource" + result.rows[0].username);
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


>>>>>>> a0719f5b2d262371e19cece96d73bf6d0157becf
