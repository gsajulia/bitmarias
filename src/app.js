require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./mail');
let app = express();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use('/images', express.static('images'));

app.get('/',  function (req, res) {
    res.render('index', {qs: req.query}) ;
});
app.get('/contact',  function (req, res) {
    res.render('join-us', {qs: req.query}) ;
});
app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body);
    const {email, msg} = req.body;

    //email para a pessoa que mandou a sugestão
    sendMail(email, msg, null,function (error, data) {
        if(error){
            res.status(500).json({message: 'Internal Error'});
        } else {
            res.json({message: 'Email sent'});
        }
    });

    //email pro bitmarias
    sendMail(email, msg, 'bitmarias@inf.ufsm.br',function (error, data) {
        if(error){
            res.status(500).json({message: 'Internal Error'});
        } else {
            res.json({message: 'Email sent'});
        }
    });
    res.render('contact-sucess', {data: req.body}) ;
});

app.listen(3000);