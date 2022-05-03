const path = require('path')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'pass'
  }
});

const handlebarOptions = {
  viewEngine: {
    extName: ".handlebars",
    partialsDir: path.resolve('./views'),
    defaultLayout: false,
  },
  viewPath: path.resolve('./views'),
  extName: ".handlebars",
}

transporter.use('compile', hbs(handlebarOptions));

var mailOptions = {
  from: 'theanik20@gmail.com',
  to: "theanik20@gmail.com",
  subject: 'Sending mail short assignment',
  template: 'email',
  context: {
    title: 'HELLO EVERYONE! sabai jana sanchai ho?',
    text: "yo sakyo yar aana fero chat app wala garnu parxa",
    conc: "Thank you everyone mero hawa assignment herdeko ma"
  }

};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email has been sent sucessfully: ' + info.response)
  }
});