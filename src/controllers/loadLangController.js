const fs = require('fs');
const path = require('path');


const loadLang = () =>{

    return {
        slides: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/slides.json'))),
        halitosis: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/halitosis.json'))),
        stats: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/stats.json'))),
        bio: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/bio.json'))),
        testimonials: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/testimonials.json'))),
        contact: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/contact.json'))),
        footer: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/footer.json'))),
        navbar: JSON.parse(fs.readFileSync(path.join(__dirname, '../../public/json/eng/navbar.json'))),
    }
}

module.exports = loadLang;