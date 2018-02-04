const openMenu = document.querySelector('#openMenu');
const menu = document.querySelector('#menu');
const closeMenu = document.querySelector('#closeMenu');

openMenu.addEventListener('click', function() {
    menu.classList.add('natural__menu--active');
});

closeMenu.addEventListener('click', function() {
    menu.classList.remove('natural__menu--active');
});

