require("dotenv").config();
var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false, 
  auth: {
      user: process.env.MAIL_USERNAME, 
      pass: process.env.MAIL_PASSWORD ,  
  },
  tls: {
      rejectUnauthorized: false,
  },
});

module.exports = { transporter };
