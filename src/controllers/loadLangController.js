const fs = require('fs');
const path = require('path');


const loadLang = (lang) =>{
    console.log('lang', lang)
    if(lang === "none"){
        lang = "eng"
    }
    else lang

    return {
        slides: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/slides.json'))),
        halitosis: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/halitosis.json'))),
        stats: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/stats.json'))),
        bio: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/bio.json'))),
        testimonials: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/testimonials.json'))),
        contact: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/contact.json'))),
        footer: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/footer.json'))),
        navbar: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/navbar.json'))),
        treatments: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/'+lang+'/treatments.json'))),
    }

}

module.exports = loadLang;