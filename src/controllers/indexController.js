const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
const loadLang = require('./loadLangController');

module.exports = {
    index: function(req, res, next) {
        let lang = null;
        if (req.cookies.lang == undefined) {
          lang = "none";
          res.cookie("lang", "none");
        } else {
          lang = req.cookies.lang;
        }
            let language = loadLang(lang);
        return res.send('hola')    
        res.render('index', { 
            title: 'Dr. Ripa', 
            testimonials: language.testimonials,
            slides: language.slides,
            halitosis: language.halitosis,
            stats: language.stats,
            bio: language.bio,
            contact: language.contact,
            footer: language.footer,
            navbar: language.navbar,
            treatments: language.treatments,
            
        });
    },
    langChange: (req, res) => {
        res.cookie("lang", req.body.lang);
        res.redirect('/')
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
                to: "Bayharborsmile@gmail.com", // list of receivers info@dralizaklein.com
                subject: req.body.subject+"thefreshbreathclinics.com", // Subject line
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