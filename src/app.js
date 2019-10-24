//to use ejs create a folder named views, add a new file "index.ejs" and put the content of the index.html there
const express = require('express');
const bodyParser = require('body-parser');
let app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

app.get('/',  function (req, res) {
    //res.header("Content-Type", "text/html; charset=utf-8");
    res.render('index', {qs: req.query}) ;
}); //this form is for ejs
app.post('/', urlencodedParser, function (req, res) {
    //res.header("Content-Type", "text/html; charset=utf-8");
    console.log(req.body);
    res.render('contact-sucess', {data: req.body}) ;
});
// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html') ;
// });
// app.get('/profile/:name', function (req, res) {
//     let data = {age: 23, job:'ninja', hobbies:['eating', 'fishing']};
//     res.render('profile', {person: req.params.name, data: data});
// }); // this is what ejs is used for , to show something from the database
app.listen(3000);