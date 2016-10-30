var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var nunjucks = require('nunjucks');
var db = require('./config/db');
var env = require('./config/env');
var Beer = require('./models/beer');
var router = express.Router();

var port = process.env.PORT || 8080;
mongoose.connect(db.url);

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', env.views);
app.engine('html', nunjucks.render);
var nunjucksEnv = nunjucks.configure(env.views, {
  autoscape: true,
  express: app
});

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));

require('./routes/routes')(router,Beer);

app.get('/', function(req, res) {
  res.render('index.html');
});

app.use('/api/',router);

app.listen(port);
console.log('E a mágica começa na porta -> '+port);
