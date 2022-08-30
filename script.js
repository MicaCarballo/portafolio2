const iconmenu= document.querySelector('#icon');
const menu= document.querySelector('#menu');

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

