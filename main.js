import './style.css'


const navBtn = document.querySelector('#menu')
const menuBar = document.querySelector('[role="menubar"]');

// console.log(navBtn);

navBtn.addEventListener('click', () => {
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex-show");
})


document.addEventListener('click', (event)=> {
    if (event.target.closest("#menu")) return
    menuBar.classList.remove("flex-show");
    menuBar.classList.add("hidden");
})

// navBtn.addEventListener('click', () => {
//     menuBar.classList.toggle('hidden');
// })