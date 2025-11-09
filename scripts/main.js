const asideBar = document.getElementById('asideBar');
const OpenAsideBar = document.getElementById('OpenAsideBar');
const CloseAsideBar = document.getElementById('CloseAsideBar');
const overly = document.getElementById('overly');
const asideLink = document.querySelectorAll('.asideLink');
const navUl = document.querySelector('.navUl');
const navbar = document.querySelector('.navbar');



asideLink.forEach((el)=>{
    el.addEventListener("click",()=>{
         asideBar.classList.remove('right-0');
    asideBar.classList.add('-right-96');
    overly.classList.add('hidden');
    });
});

OpenAsideBar.addEventListener('click',()=>{
    asideBar.classList.remove('-right-96');
    asideBar.classList.add('right-0');
    overly.classList.remove('hidden');
});
CloseAsideBar.addEventListener('click',()=>{
    asideBar.classList.remove('right-0');
    asideBar.classList.add('-right-96');
    overly.classList.add('hidden');
});
overly.addEventListener('click',()=>{
    asideBar.classList.remove('right-0');
    asideBar.classList.add('-right-96');
    overly.classList.add('hidden');
});


window.addEventListener('scroll',()=>{
    if(scrollY > 50){
       navUl.classList.remove('bg-white/20','shadow-md','backdrop-blur-lg');
       navbar.classList.add('bg-white/10','backdrop-blur-lg');
    }else{
       navUl.classList.add('bg-white/20','shadow-md','backdrop-blur-lg');
       navbar.classList.remove('bg-white/10','backdrop-blur-lg');
    }
})