const openMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.natural__menu');
const closeMenu = document.querySelector('.menu__exit');

openMenu.addEventListener('click', function() {
    menu.classList.add('natural__menu--active');
    openMenu.classList.add('header__menu--active');
});

closeMenu.addEventListener('click', function() {
    menu.classList.remove('natural__menu--active');
    openMenu.classList.remove('header__menu--active');
});

