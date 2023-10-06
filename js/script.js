const header = document.querySelector('header')
const btn = document.getElementById('btn-menu');
const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('nav');

function openMenu() {
    header.classList.toggle('header-active');
    btn.classList.toggle('active');
    menu.classList.toggle('active');
}

btn.addEventListener('click', openMenu);