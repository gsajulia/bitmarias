const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: process.env.PASSWORD, // generated ethereal user
        pass: process.env.MAIL // generated ethereal password
    },
});

const sendMail = (email, msg, receiver, cb) => {
    // send mail with defined transport object
    let mailOptions = {
        from: '"BitMarias" <bitmarias@inf.ufsm.br>', // sender address
        to: receiver ? receiver : email, // list of receivers
        subject: 'Sua sugestão / dúvida foi recebida! Em breve responderemos!', // Subject line
        html: receiver ? msg + '<br/><br/>' + ' -> Email da pessoa que entrou em contato: ' + email : 'Sua sugestão / dúvida: <br/><br/>' + msg// html body
    };

    transporter.sendMail(mailOptions, (error, info) =>{
        if(error){
            return cb(error, null);
        }
        console.log('Message sent: %s', info.messageId);

        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
};

module.exports = sendMail;