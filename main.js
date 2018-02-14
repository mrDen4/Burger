// const openMenu = document.querySelector('.header__menu');
// const menu = document.querySelector('.natural__burger-menu');
// const teamBtn = document.querySelector('.team__item-btn');
// const teamItem = document.querySelector('.team__item');

// openMenu.addEventListener('click', function() {
//     if (menu.classList.contains('natural__burger-menu--active')) {
//         menu.classList.remove('natural__burger-menu--active');
//         openMenu.classList.remove('header__menu--active')
//     }
//     else {
//         menu.classList.add('natural__burger-menu--active');
//         openMenu.classList.add('header__menu--active')
//     }
// });

// teamBtn.addEventListener('click', function() {
//     if (teamItem.classList.contains('team__item--active')) {
//         teamItem.classList.remove('team__item--active')
//     }
//     else {
//         teamItem.classList.add('team__item--active');
//     }
// });

// С использованием jQuery

$(document).ready(() => {

    //Hamburger Menu
    $('.header__menu').on('click', e => {
        $('.natural__burger-menu').toggleClass('natural__burger-menu--active');
        $('.header__menu').toggleClass('header__menu--active');
    });

    //Team Accordion
    $('.team__item-btn').on('click', e => {
        var teamMore = $(e.currentTarget).next();
        if ($(teamMore).hasClass('team__link-more--active')) {
            $(teamMore).toggleClass('team__link-more--active');
        }
        else {           
            $(teamMore).toggleClass('team__link-more--active');
        }
    });

    //Menu Accordion
    $('.menu__link-for').on('click', e => {
        var MenuAccordion = $(e.currentTarget).next();
        if ($(MenuAccordion).hasClass('menu__more--active')) {
            $(MenuAccordion).toggleClass('menu__more--active');
        }
        else {          
            $(MenuAccordion).toggleClass('menu__more--active');
        }
    });
});