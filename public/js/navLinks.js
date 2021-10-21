const linkAboutme = document.getElementById("linkAboutme");
const linkInfo = document.getElementById("linkInfo");
const linkStats = document.getElementById("linkStats");
const linkReviews = document.getElementById("linkReviews");
const linkContact = document.getElementById("linkContact");

const sectionAboutme = document.getElementById("sectionAboutme");
const sectionInfo = document.getElementById("sectionInfo");
const sectionStats = document.getElementById("sectionStats");
const sectionReviews = document.getElementById("sectionReviews");
const sectionContact = document.getElementById("sectionContact");

const whatsappIcon = document.getElementById("whatsapp");

whatsappIcon.addEventListener("click", ()=>{
    console.log('clicked');
    window.location.href = "https://api.whatsapp.com/send?phone=17866091363&text=Hola%20Dra%20Liza%20Klein.%20Vengo%20de%20tu%20pagina%20web.";
})

const whatsappIcon2 = document.getElementById("whatsapp2");

whatsappIcon2.addEventListener("click", ()=>{
    console.log('clicked');
    window.location.href = "https://api.whatsapp.com/send?phone=17866091363&text=Hola%20Dra%20Liza%20Klein.%20Vengo%20de%20tu%20pagina%20web.";
});

const videosMore = document.getElementById("showVideos");
const videosBtn = document.getElementById("toggleVideos");
let showVids = false;
videosBtn.addEventListener("click", ()=>{
    if(showVids){
        showVids = false;
        videosMore.style.display = "none";
        videosBtn.innerHTML = "Ver mas";
    }else{
        showVids = true;
        videosMore.style.display = "flex";
        videosBtn.innerHTML = "Ver menos";
    }
});
videosBtn.addEventListener("touchstart", ()=>{
    if(showVids){
        showVids = false;
        videosMore.style.display = "none";
        videosBtn.innerHTML = "Ver mas";
    }else{
        showVids = true;
        videosMore.style.display = "flex";
        videosBtn.innerHTML = "Ver menos";
    }
});

const options = {block: "center",behavior: "smooth"}

const btnCollapse = document.getElementById("check");

linkAboutme.addEventListener("click",()=>{
    sectionAboutme.scrollIntoView(options)
    btnCollapse.checked = false;
})
linkInfo.addEventListener("click",()=>{
    sectionInfo.scrollIntoView(options)
    btnCollapse.checked = false;
})
linkStats.addEventListener("click",()=>{
    sectionStats.scrollIntoView(options)
    btnCollapse.checked = false;
})
linkReviews.addEventListener("click",()=>{
    sectionReviews.scrollIntoView(options)
    btnCollapse.checked = false;
})
linkContact.addEventListener("click",()=>{
    sectionContact.scrollIntoView(options)
    btnCollapse.checked = false;
})