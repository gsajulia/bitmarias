//to use ejs create a folder named views, add a new file "index.ejs" and put the content of the index.html there
let express = require('express');

let app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

// app.get('/', function (req, res) {
//     res.render('index') ;
// }); //this form is for ejs

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html') ;
});
// app.get('/profile/:name', function (req, res) {
//     let data = {age: 23, job:'ninja', hobbies:['eating', 'fishing']};
//     res.render('profile', {person: req.params.name, data: data});
// }); // this is what ejs is used for , to show something from the database
app.listen(3000);