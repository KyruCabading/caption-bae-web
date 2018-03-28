var express     = require('express'),
    app         = express(),
    path        = require('path'),
    PORT = 8080,
    // PORT = process.env.PORT || 8080,
    // IP = process.env.IP || '127.0.0.1';
    IP = '127.0.0.1';
    // Category    = require('./models/category.js'),
    // Quote       = require('./models/quote.js'),
    // User        = require('./models/category.js');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index');
});

app.listen(PORT, IP, function(){
  console.log("Server initialized at localhost:" + PORT);
});


// // Categories
// {
//
// }
// // Qoutes
// {
//   ID:
//   text: "Hey, I just met you, this is crazy"
// }
