import { data } from "./data.js";

const asideBar = document.getElementById('asideBar');
const OpenAsideBar = document.getElementById('OpenAsideBar');
const CloseAsideBar = document.getElementById('CloseAsideBar');
const overly = document.getElementById('overly');
const asideLink = document.querySelectorAll('.asideLink');
const navUl = document.querySelector('.navUl');
const navbar = document.querySelector('.navbar');
const form = document.getElementById('contactForm');
const  darkMode = document.getElementById('darkMode');
const upbtn = document.getElementById('upbtn');
const links = document.querySelector('.links');


upbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


darkMode.addEventListener('click',()=>{
        document.body.classList.toggle("dark");
        document.documentElement.classList.toggle("dark");
});



asideLink.forEach((el)=>{
    el.addEventListener("click",()=>{
    links.classList.add('hidden');
    CloseAsideBar.classList.add('hidden');
    links.classList.add('h-0');
    links.classList.add('opacity-0');
    overly.classList.add('hidden');
    links.classList.add('pointer-events-none');
    links.classList.remove('h-[400px]');
    CloseAsideBar.classList.add('hidden');
    overly.classList.remove('hidden');
    overly.classList.add('hidden');
    });
});

OpenAsideBar.addEventListener('click',()=>{
    links.classList.remove('hidden');
    CloseAsideBar.classList.remove('hidden');
    links.classList.remove('h-0');
    links.classList.remove('opacity-0');
    overly.classList.remove('hidden');
    links.classList.remove('pointer-events-none');
    links.classList.add('h-[400px]');
    CloseAsideBar.classList.remove('hidden');
});

CloseAsideBar.addEventListener('click',()=>{
    links.classList.add('hidden');
    CloseAsideBar.classList.add('hidden');
    links.classList.add('h-0');
    links.classList.add('opacity-0');
    overly.classList.add('hidden');
    links.classList.add('pointer-events-none');
    links.classList.remove('h-[400px]');
    CloseAsideBar.classList.add('hidden');
    overly.classList.add('hidden');
});
overly.addEventListener('click',()=>{
    CloseAsideBar.classList.add('hidden');
    links.classList.add('h-0');
    links.classList.add('opacity-0');
    overly.classList.add('hidden');
    links.classList.add('pointer-events-none');
    links.classList.remove('h-[400px]');
    CloseAsideBar.classList.add('hidden');
    overly.classList.remove('hidden');
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

window.addEventListener('scroll', () => {
    if (scrollY > 300) {
        upbtn.classList.add('show');
        upbtn.classList.replace('opacity-0', 'opacity-100');
        upbtn.classList.remove('pointer-events-none');
    } else {
        upbtn.classList.remove('show');
        upbtn.classList.replace('opacity-100', 'opacity-0');
        upbtn.classList.add('pointer-events-none');
    }
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    sendMsg();
});


function sendMsg(){
    const name = document.getElementById('name');
    const email = document.getElementById('email')
    const msg = document.getElementById('message');


    if(name.value == "" || email.value == "" || msg.value == ""){
        alert('fill the inputs to send the message !!');
    }else{
        emailjs.sendForm("service_p6srpke","template_50wdmrk",form)
        .then(()=>{
             alert('Message sent successfully!');
            form.reset();
        })
        .catch(()=>{
              alert('Error: ' + JSON.stringify(err));
        });
    }
}

const project_area = document.getElementById('project_area');


data.forEach((project)=> {


project_area.innerHTML += `
<div data-aos="zoom-in" data-aos-delay="400" class="bg-white dark:bg-gray-800 group p-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 border border-gray-300 dark:border-gray-500 rounded-xl">
                  <div class="bg-rose-400 rounded-xl overflow-hidden">
                       <img class="w-full group-hover:scale-105 transition-all duration-300  rounded-t-xl sm:h-52 object-cover" src="${project.img}" alt="${project.title}" loading="lazy">
                  </div>
                  <div class="px-3 space-y-3 rounded-b-xl pb-3 mt-3">
                       <div class="flex items-center justify-between">
                       <h1 class="text-gray-800 dark:text-gray-200 text-lg">${project.title}</h1>
                        <span class="text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full">${project.type}</span>
                       </div>
                       <p class="text-sm text-gray-600 dark:text-gray-400 h-20">${project.description}</p>
                       <div class="flex gap-3 text-white">
                         <a href="${project.demo_link}" href class="bg-gradient-to-t from-blue-500 to-blue-400 dark:bg-gradient-to-t dark:from-rose-700 dark:to-rose-600 flex items-center justify-center text-nowrap cursor-pointer px-3 py-1.5 rounded-xl w-full" target="_blank" rel="noopener noreferrer">Demo <i class="ri-arrow-right-up-line text-xl"></i></a>
                         <a href="${project.repo_link}" class="bg-gray-800 hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center w-12 rounded-full" target="_blank" rel="noopener noreferrer"><i class="ri-github-line text-xl"></i></a>
                       </div>
                       
                  </div>
                   
                 </div>

`;

});
