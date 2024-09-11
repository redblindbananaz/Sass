const menu = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;
menu.addEventListener('click', toggle);
function toggle() {
    if (!showMenu) {
        menu.classList.add('open');
        hamburger.classList.add('open');
        menuNav.classList.add('open');
        nav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true;
    } else {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
        menuNav.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }
}