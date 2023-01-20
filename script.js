const iconmenu= document.querySelector('#icon');
const menu= document.querySelector('#menu');
console.log(menu)

iconmenu.addEventListener('click', function(){
    menu.classList.toggle('menu_show');
});

const nav= document.querySelector('#navbar');
iconmenu.addEventListener('click', function(){
    nav.classList.toggle('toblack')
});

iconmenu.addEventListener('click', function(){
    iconmenu.classList.toggle('towhite');
});

const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));






const observerClouds = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('see-clouds');
        } else {
            entry.target.classList.remove('see-clouds')
        }
    })
})
const hiddenClouds = document.querySelectorAll('.notshow');

hiddenClouds.forEach((el)=> observer.observe(el));

const job = document.querySelector(".job");
const aboutMe = document.querySelector(".about-me");
const skillsTitle = document.querySelector(".skills-title");
const projectsTitle = document.querySelector(".projects-title");
const project1Title = document.querySelector(".project1-title");
const project2Title = document.querySelector(".project2-title");
const project3Title = document.querySelector(".project3-title");
const homeNav = document.querySelector(".home-nav");
const skillsNav = document.querySelector(".skills-nav");
const workNav =document.querySelector(".work-nav");
const contactNav = document.querySelector(".contact-nav");
const resume = document.querySelector(".resume-nav");

const buttonEsp =  document.querySelector(".espBtn");
const buttonEng = document.querySelector(".engBtn");
const contactTitle = document.querySelector(".contact-title");
const contactName = document.querySelector(".contact-name");
const contactSubject = document.querySelector(".contact-subject");
const contactEmail = document.querySelector(".contact-email");
const contactBtn = document.querySelector(".contact-button");
const moreWork = document.querySelector(".more-work")
const englishHtml = document.body.parentElement.innerHTML;


buttonEsp.addEventListener("click", function() {
 
    job.innerHTML = "desarrolladora web";
    aboutMe.innerHTML = "mi descp en español ahora";
    skillsTitle.innerHTML = "En lo que me destaco";
    projectsTitle.innerHTML = "mis proyectos";
    project1Title.innerHTML = "nombre del proyecto";
    project2Title.innerHTML = "weather app";
    project3Title.innerHTML = "y otro proyecto supongo";
    homeNav.innerHTML = "inicio";
    skillsNav.innerHTML = "lenguajes";
    workNav.innerHTML = "proyectos";
    contactNav.innerHTML = "contacto";
    resume.innerHTML = "curriculum";
    contactTitle.innerHTML = "contactame";
    contactName.innerHTML = "nombre";
    contactSubject.innerHTML = "asunto";
    contactBtn.value = "enviar";
    moreWork.innerHTML = "ver mas proyectos"

});
  
buttonEng.addEventListener("click", function(){
    job.innerHTML = "web developer";
    aboutMe.innerHTML = "my desc in english";
    skillsTitle.innerHTML = "what im good at";
    projectsTitle.innerHTML = "My Work";
    project1Title.innerHTML = "title";
    project2Title.innerHTML = "weather app";
    project3Title.innerHTML = "somehing else";
    homeNav.innerHTML = "home";
    skillsNav.innerHTML = "skills";
    workNav.innerHTML = "my work";
    contactNav.innerHTML = "contact";
    resume.innerHTML = "resume";
    contactBtn.value = "submit";
    contactTitle.innerHTML = "lets get in touch";
    contactName.innerHTML = "name";
    contactSubject.innerHTML = "subject";
    moreWork.innerHTML = "see more of my work"
}
)