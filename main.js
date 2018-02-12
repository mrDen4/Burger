const openMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.natural__burger-menu');
const teamBtn = document.querySelector('.team__item-btn');
const teamItem = document.querySelector('.team__item');

openMenu.addEventListener('click', function() {
    if (menu.classList.contains('natural__burger-menu--active')) {
        menu.classList.remove('natural__burger-menu--active');
        openMenu.classList.remove('header__menu--active')
    }
    else {
        menu.classList.add('natural__burger-menu--active');
        openMenu.classList.add('header__menu--active')
    }
});

teamBtn.addEventListener('click', function() {
    if (teamItem.classList.contains('team__item--active')) {
        teamItem.classList.remove('team__item--active')
    }
    else {
        teamItem.classList.add('team__item--active');
    }
});



