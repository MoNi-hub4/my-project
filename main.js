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

// navBtn.addEventListener('click', () => {
//     menuBar.classList.toggle('hidden');
// })