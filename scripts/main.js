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





darkMode.addEventListener('click',()=>{
        document.body.classList.toggle("dark");
        document.documentElement.classList.toggle("dark");
});



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

window.addEventListener('scroll', () => {
    if (scrollY > 100) {
        upbtn.classList.replace('opacity-0', 'opacity-100');
        upbtn.classList.remove('pointer-events-none');
    } else {
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