
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title"); 
const header=document.querySelector("header");
const defaultTitle = document.querySelector('.default-title');
const hoverTitle = document.querySelector('.hover-title');
const section = document.querySelector("section")
const opacity=document.querySelectorAll(".opacity")
const border=document.querySelector(".border")
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

let header_height= header.offsetHeight;
let section_height=section.offsetHeight;


big_title.addEventListener('mouseenter', () => {
    defaultTitle.style.display = 'none';
    hoverTitle.style.display = 'inline-block';
    hoverTitle.style.color = 'white';
});

big_title.addEventListener('mouseleave', () => {
    defaultTitle.style.display = 'inline-block';
    hoverTitle.style.display = 'none';
    defaultTitle.style.color = 'black';
});
hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('open');
});
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerMenu.contains(event.target)) {
        menu.classList.remove('open');
    }
});

window.addEventListener('scroll',() => {
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();
     
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
    opacity.forEach(element => {
        element.style.opacity = scroll / (sectionY.top + section_height);
    })
    border.style.width = `${scroll / (sectionY.top + section_height) * 30}%`;


    big_title.style.opacity = -scroll/(header_height/2)+1;
    
})