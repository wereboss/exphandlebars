let express = require('express');
let exphbs  = require('express-handlebars');
 
let app = express();
 
app.engine('hbs', exphbs({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
 
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/second', function (req, res) {
    res.render('home', {layout: 'second', sampledata: 'home-template'});
});
 
app.listen(3000, function () {
    console.log('express-handlebars example server listening on: 3000');
});