const openMenu = document.querySelector('.header__menu');

openMenu.addEventListener('click', function() {
    if (menu.classList.contains('natural__menu--active')) {
        menu.classList.remove('natural__menu--active');
        openMenu.classList.remove('header__menu--active')
    }
    else {
        menu.classList.add('natural__menu--active');
        openMenu.classList.add('header__menu--active')
    }
});



