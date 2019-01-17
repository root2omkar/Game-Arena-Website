var express = require('express');
const { check , validationResult } = require('express-validator/check');
var path = require('path');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/GA',{ useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function()
{
	console.log("connected to database");
});

var bodyencodedUrls= bodyParser.urlencoded({extended: true});
var urlencodedParser = bodyParser.urlencoded({extended: false});


var useritems = require(path.join(__dirname + '/../model/item.js'));
var theUser = require(path.join(__dirname + '/../model/User.js'));

var app = express();

app.set('view engine', 'ejs');
app.use('/partials', express.static(path.join(__dirname +'/../views/partials')));
app.set('/views', express.static(path.join(__dirname +'/../views')));
app.use('/resources', express.static(path.join(__dirname + '/../resources')));


app.get('/index',function(req,res)
{
  res.render('index');
  res.render('Info');
  res.render('footer');
  res.render('Menu');
});

app.get('/AssasinsCreed',function(req,res)
{
  res.render('AssasinsCreed');
  res.render('footer');
});

app.get('/item',function(req,res)
{
  res.render('item');
  res.render('footer');
  res.render('Info');
  res.render('footer');
  res.render('Iteminfo');
});

app.get('/categories',function(req,res)
{
  res.render('categories');
  res.render('gamecategories');
  res.render('Info');
  res.render('footer');
});

app.get('/myitems',function(req,res)
{
  res.render('myitems');
  res.render('Menu');
  res.render('footer');
  res.render('gameinfo');
});

app.get('/about',function(req,res)
{
  res.render('about');
  res.render('footer');
  res.render('Menu');
});

app.get('/contact',function(req,res)
{
  res.render('contact');
  res.render('footer');
  res.render('Menu');
  res.render('Info');
  res.render('address');
});

app.get('/swap',function(req,res)
{
  res.render('swap');
  res.render('footer');
  res.render('Menu');
  res.render('gameinfo');
});

app.get('/mySwaps',function(req,res)
{
  res.render('mySwaps');
  res.render('footer');
  res.render('gameinfo');
  res.render('Menu');
});

app.get('/MyGames',function(req,res)
{
  res.render('MyGames');
  res.render('footer');
  res.render('Menu');
  res.render('MyGamesInfo');
});

app.get('/Cart',function(req,res)
{
  res.render('Cart');
  res.render('footer');
  res.render('Menu');
});

app.get('/Cart1',function(req,res)
{
  res.render('Cart1');
  res.render('Cart');
});

app.get('/Cart2',function(req,res)
{
  res.render('Cart2');
});

app.get('/Cart3',function(req,res)
{
  res.render('Cart3');
});

app.get('/SignIn',function(req,res)
{
  res.render('SignIn');
  res.render('footer');
  res.render('Menu');
});

app.get('/PrinceOfPersia',function(req,res)
{
  res.render('PrinceOfPersia');
  res.render('footer');
});

app.get('/BikeRace',function(req,res)
{
  res.render('BikeRace');
  res.render('footer');
});

app.get('/CarRace',function(req,res)
{
  res.render('CarRace');
  res.render('footer');
});

app.get('/Store',function(req,res)
{
  res.render('Store');
  res.render('footer');
  res.render('Menu');
  res.render('StoreInfo');
});

app.get('/Fifa',function(req,res)
{
  res.render('Fifa');
  res.render('footer');
});

app.get('/Contra',function(req,res)
{
  res.render('Contra');
  res.render('footer');
});

app.get('/Additems', function(req,res)
{
	useritems.itemID=req.query.itemID;
	useritems.itemName=req.query.itemName;
	useritems.category=req.query.category;
	useritems.rating=req.query.rating;
	useritems.url=req.query.url;

	res.render('Additems', {qs: req.query});
	res.render('footer');
});

app.post('/Cartitems', urlencodedParser, function(req,res)
{
	useritems.itemID=req.body.itemID;
  useritems.itemName=req.body.itemName;
  useritems.category=req.body.category;
  useritems.rating=req.body.rating;
  useritems.url=req.body.url;

	console.log(req.body);
	res.render('Cartitems', {useritems: req.body});
	res.render('footer');
});

app.get('/Register',function(req,res)
{
	theUser.firstName=req.query.firstName;
  theUser.lastName=req.query.lastName;
  theUser.email=req.query.email;
  theUser.Address=req.query.address;
	theUser.City=req.query.city;
	theUser.State=req.query.state;
	theUser.Country=req.query.country;
	theUser.username=req.query.username;
	theUser.password=req.query.password;

  console.log(req.body);
  res.render('Register', {qs: req.query});
	res.render('footer');

});

app.post('/Registered', urlencodedParser, function(req,res,next)
{
	theUser.firstName=req.body.firstName;
	theUser.lastName=req.body.lastName;
	theUser.email=req.body.email;
	theUser.address=req.body.address;
	theUser.city=req.body.city;
	theUser.state=req.body.state;
	theUser.country=req.body.country;
	theUser.username=req.body.username;
	theUser.password=req.body.password;

	console.log(req.body);
	res.render('Registered', {theUser: req.body});
	res.render('footer');

});

app.listen(8080);
