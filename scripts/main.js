import { data } from "./data.js";

const OpenAsideBar = document.getElementById('OpenAsideBar');
const overly = document.getElementById('overly');
const asideLink = document.querySelectorAll('.asideLink');
const navUl = document.querySelector('.navUl');
const navbar = document.querySelector('.navbar');
const form = document.getElementById('contactForm');
const darkModeButtons = document.querySelectorAll('.darkMode');
const upbtn = document.getElementById('upbtn');
const links = document.querySelector('.links');
const html = document.documentElement;
const msg = document.getElementById('msg');
const msgContent = document.getElementById('msgContent');
const lightModeButtons = document.querySelectorAll('.lightMode');




function formMsg(text){
     msg.classList.remove('right-0', 'opacity-0', 'pointer-events-none');
     msg.classList.add('right-10', 'opacity-100', 'pointer-events-auto');
     msgContent.textContent = text;
     setTimeout(()=>{
     msg.classList.remove('right-10', 'opacity-100', 'pointer-events-auto');
     msg.classList.add('right-0', 'opacity-0', 'pointer-events-none');
     },3000);
}


upbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

//dark mode in localstorage
function updateIcons() {
    darkModeButtons.forEach(btn => {
        if (html.classList.contains('dark')) {
            btn.classList.replace('ri-moon-fill', 'ri-sun-fill');
        } else {
            btn.classList.replace('ri-sun-fill', 'ri-moon-fill'); 
        }
    });
}

if (localStorage.getItem("theme") === 'dark') {
    html.classList.add('dark');
}
updateIcons();
darkModeButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        html.classList.toggle("dark");
    
        if (html.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateIcons();
    });
});

function closeSidebar() {
    links.classList.remove('h-80' , 'opacity-100' , 'pointer-events-auto');
    overly.classList.add('hidden');
    links.classList.add('h-0', 'opacity-0' ,'pointer-events-none');
}


OpenAsideBar.addEventListener('click',()=>{
    links.classList.remove('h-0', 'opacity-0' ,'pointer-events-none');
    links.classList.add('h-80' , 'opacity-100' , 'pointer-events-auto');
    overly.classList.remove('hidden');
});

asideLink.forEach((el)=>{  el.addEventListener("click",  closeSidebar ); });
overly.addEventListener('click',   closeSidebar   );


// show the 
let lastScroll = 0;
window.addEventListener('scroll', () => {
    lastScroll = window.scrollY;
    requestAnimationFrame(() => {
        if(lastScroll > 50){
            navUl.classList.remove('bg-white/20','shadow-md','backdrop-blur-lg');
            navbar.classList.add('bg-white/10','backdrop-blur-lg');
        } else {
            navUl.classList.add('bg-white/20','shadow-md','backdrop-blur-lg');
            navbar.classList.remove('bg-white/10','backdrop-blur-lg');
        }

        // Up button
        if(lastScroll > 300){
            upbtn.classList.add('show');
            upbtn.classList.replace('opacity-0','opacity-100');
            upbtn.classList.remove('pointer-events-none');
        } else {
            upbtn.classList.remove('show');
            upbtn.classList.replace('opacity-100','opacity-0');
            upbtn.classList.add('pointer-events-none');
        }
    });
});


//send the info of the user via form to gmail
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
          //   alert('Message sent successfully!');
                  formMsg("Message sent successfully");
            form.reset();
        })
        .catch((err)=>{
              //alert('Error: ' + JSON.stringify(err));
              formMsg('Error: ' + JSON.stringify(err));
        });
    }
}


// generate the project section
const project_area = document.getElementById('project_area');

data.forEach((project) => {
  // الكارد الرئيسي
  const card = document.createElement('div');
  card.className = "bg-white dark:bg-gray-800 group p-2 cursor-pointer transition-all duration-300 hover:-translate-y-1 border border-gray-300 dark:border-gray-500 rounded-xl";
  card.setAttribute('data-aos', 'zoom-in');
  card.setAttribute('data-aos-delay', '400');

  // الصورة
  const imgContainer = document.createElement('div');
  imgContainer.className = "bg-rose-400 rounded-xl overflow-hidden";

  const img = document.createElement('img');
  img.className = "w-full group-hover:scale-105 transition-all duration-300 rounded-t-xl sm:h-52 object-cover";
  img.src = project.img;
  img.alt = project.title;
  img.loading = "lazy";

  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  // محتوى الكارد
  const content = document.createElement('div');
  content.className = "px-3 space-y-3 rounded-b-xl pb-3 mt-3";

  const titleDiv = document.createElement('div');
  titleDiv.className = "flex items-center justify-between";

  const title = document.createElement('h1');
  title.className = "text-gray-800 dark:text-gray-200 text-lg";
  title.textContent = project.title;

  const type = document.createElement('span');
  type.className = "text-xs px-3 py-1 bg-blue-100 text-blue-700 rounded-full";
  type.textContent = project.type;

  titleDiv.appendChild(title);
  titleDiv.appendChild(type);
  content.appendChild(titleDiv);

  // الوصف
  const desc = document.createElement('p');
  desc.className = "text-sm text-gray-600 dark:text-gray-400 h-20";
  desc.textContent = project.description;
  content.appendChild(desc);

  // أزرار Demo و GitHub
  const btnDiv = document.createElement('div');
  btnDiv.className = "flex gap-3 text-white";

  const demo = document.createElement('a');
  demo.href = project.demo_link;
  demo.target = "_blank";
  demo.rel = "noopener noreferrer";
  demo.className = "bg-gradient-to-t from-blue-500 to-blue-400 dark:bg-gradient-to-t dark:from-rose-700 dark:to-rose-600 flex items-center justify-center text-nowrap cursor-pointer px-3 py-1.5 rounded-xl w-full transition-all duration-300";
  demo.innerHTML = `Demo <i class="ri-arrow-right-up-line text-xl"></i>`;

  const repo = document.createElement('a');
  repo.href = project.repo_link;
  repo.target = "_blank";
  repo.rel = "noopener noreferrer";
  repo.className = "bg-gray-800 hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center w-12 rounded-full";
  repo.innerHTML = `<i class="ri-github-line text-xl"></i>`;

  btnDiv.appendChild(demo);
  btnDiv.appendChild(repo);
  content.appendChild(btnDiv);

  // إرفاق المحتوى للكارد الرئيسي
  card.appendChild(content);
  project_area.appendChild(card);
});
