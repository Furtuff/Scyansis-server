var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

var router = express.Router();
router.get('/:username', function(req, res) {
	var getIssuesRequest = require('request');
	getIssuesRequest({
	    headers: {
	       'Content-Type': 'application/vnd.github.v3+json'
	    },
	    uri: 'https://api.github.com/'+req.params.username+'/issues',
	    method: 'GET'
	  }, function (err, response, body) {
		  console.log('errors' +err);
		  console.log('response' +response);
		  console.log('body' +body);

	  });
    res.json({ message: 'hooray! welcome to our api!' +req.params.username});   
});

app.use('/issues/', router);
app.listen(port);
console.log('Magic happens on port ' + port);