const footerLinkAbout = document.getElementById("footerLinkAbout");
const footerLinkInfo = document.getElementById("footerLinkInfo");
const footerLinkStats = document.getElementById("footerLinkStats");
const footerLinkTestimonials = document.getElementById("footerLinkTestimonials");
const footerLinkContact = document.getElementById("footerLinkContact");


footerLinkAbout.addEventListener("click",()=>{
    sectionAboutme.scrollIntoView(options)
})
footerLinkInfo.addEventListener("click",()=>{
    sectionInfo.scrollIntoView(options)
})
footerLinkStats.addEventListener("click",()=>{
    sectionStats.scrollIntoView(options)
})
footerLinkTestimonials.addEventListener("click",()=>{
    sectionReviews.scrollIntoView(options)
})
footerLinkContact.addEventListener("click",()=>{
    sectionContact.scrollIntoView(options)
})