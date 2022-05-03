var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theanik20@gmail.com',
    pass: 'evgzjqlmwiesikom'
  }
});

var mailOptions = {
  from: 'theanik20@gmail.com',
  to: "theanik20@gmail.com",
  subject: 'Sending Email s',
  html: '<h1>That was easy!<h2>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});