var express = require('express');
var app = express();
var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
	
});

/*app.get('/', function(req, res){
	res.send('Hi');
});
*/

/*app.route('/students')
.get(function(req, res){
	res.send('Get student'); })
.post(function(req, res){
	res.send('Add student'); })
.put(function(req, res){
	res.send('Update student'); })
*/

app.use(require('body-parser')());
app.use(require('method-override')());
app.use(require(__dirname + '/config/router')(express.Router()));
