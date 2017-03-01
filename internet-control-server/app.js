var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config/config');
var apiController = require('./controllers/taskTrackerController')
var port = process.env.port || 3000;
//var setupController = require('./controllers/setupController');
app.use('/assets',express.static(__dirname+'/public'));

//this is added to resolve cross origin problem
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
 
  next();
});


app.set('view engine','ejs');



mongoose.connect(config.getDbConnectionString());

/*mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error',(error) =>{consol.warn('Warning',error);
});*/

//setupController(app);
apiController(app);
app.listen(port);