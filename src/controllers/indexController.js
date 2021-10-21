const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

module.exports = {
    index: function(req, res, next) {
        let testimonials = JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/testimonials.json')));
        res.render('index', { title: 'Dra. Liza Klein', testimonials: testimonials });
    },
    message: async(req,res)=>{

        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: "mail.it-techgroup.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user:"mails@it-techgroup.com",
                pass: "Techgroup"
            },
            tls:{
                rejectUnauthorized: false
            }
        });

        try {
            // send mail with defined transport object
            await transporter.sendMail({
                from: 'Nuevo mensaje <mails@it-techgroup.com>', // sender address
                to: "maxincolla@gmail.com", // list of receivers info@dralizaklein.com
                subject: req.body.subject+" - Liza Klein Web", // Subject line
                text: req.body.message, // plain text body
                html: `<p> <span>Message: </span> "`+req.body.message+`"</p>
                        <p> <span>Email: </span> "`+req.body.email+`"</p>`, // html body
            });

            res.status(200).json('Mensaje enviado')
    }catch(error){
      res.status(400).json('No enviado')
        }
    }
}