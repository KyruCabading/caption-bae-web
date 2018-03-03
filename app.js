var express = require('express'),
    app = express(),
    path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  res.render('index');
});

app.listen(process.env.PORT || 8080, process.env.IP || '127.0.0.1', function(){
  console.log("Server initialized at localhost:" + process.env.PORT)
});
