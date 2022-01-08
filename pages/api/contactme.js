// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'kadenarnolds@gmail.com',
      pass: 'Topsports1FIFA!',
    },
  });

  transporter.verify().then(console.log).catch(console.error);

  transporter.sendMail({
    from: '"WebSite Manager" <kadenarnolds@gmail.com>', // sender address
    to: "tony.fullstack.dev@gmail.com, kadenarnolds@gmail.com", // list of receivers
    subject: req.subject, // Subject line
    text: req.message, // plain text body
    // html: "<b>There is a new article. It's about sending emails, check it out!</b>", // html body
  }).then(info => {
    console.log({info});
  }).catch(console.error);

  res.status(200).json({"status": true});
}
