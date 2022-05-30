var  btn = document.querySelector('.toggle');
var  menu = document.querySelector('.nav-menu');

// btn.addEventListener('click' , ()=>{
//     menu.classList.toggle('nav-menu-visible')
// })


function hola(){
    menu.classList.toggle('nav-menu-visible');
}

btn.addEventListener('click' , hola);