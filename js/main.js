// С использованием jQuery

$(document).ready(() => {
    //OnePage Scroll
    $(".main").onepage_scroll({
        sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                         // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                         // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
     });

    //Hamburger Menu
    $('.header__menu').on('click', e => {
        $('.natural__burger-menu').toggleClass('natural__burger-menu--active');
        $('.header__menu').toggleClass('header__menu--active');
        $('body').toggleClass('.fixed');
        $('body').on('scroll', e => {
            e.preventDefault();
        })
    });

    //Team Accordion
    $('.team__item-btn').on('click', function(){
    if ( $(this).next().is(":visible")){
    $(this).next().hide('slow');
    }
    else{
    $('.team__link-more').hide('slow');
    $(this).next().show('slow');
    }
    });

    //Menu Accordion
    $('.menu__link-for').on('click', e => {
        var MenuAccordion = $(e.currentTarget).next();        
            $(MenuAccordion).toggleClass('menu__more--active');
    });

    $('.menu__link-for').on('click', function(){
        if ( $(this).next().is(":visible")){
        $(this).next().hide('slow');
        }
        else{
        $('.menu__more').hide('slow');
        $(this).next().show('slow');
        }
        });

    //Slider
    $('.slider').bxSlider({
        nextText : '',
        prevText: ''
    });

    //Composition for slider
    $('.slide__decor-composition').on('click', e => {
        $(e.currentTarget).next().toggleClass('slide__decor-window--active')
    });

    //Send Forms
    $('#delivery-form').on('submit', submitForm);

    function submitForm (ev) {
    ev.preventDefault();
    
    var form = $(ev.target),
    data = form.serialize(),
    url = form.attr('action'),
    type = form.attr('method');

    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;

            if (status === 'ok') {
                $('.delivery__bg').toggleClass('delivery__bg--active');
                $('.delivery__msg').toggleClass('delivery__msg--active');
                $('.delivery__msg').append('<p class="delivery__msg--success">' + mes + '</p>');
            } else{
                $('.delivery__bg').toggleClass('delivery__bg--active');
                $('.delivery__msg').toggleClass('delivery__msg--active');
                $('.delivery__msg').append('<p class="delivery__msg--error">' + mes + '</p>');
            }
    }).fail(function(jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });

    $('.delivery__msg-btn').on('click', e => {
        $('.delivery__bg').toggleClass('delivery__bg--active');
        $('.delivery__msg').toggleClass('delivery__msg--active');
    });
};

//Общая функция для форм на стр
    var ajaxForm = function (form) {
    var data = form.serialize(),
        url = form.attr('action');
    
    return $.ajax({
        type: 'POST',
        url: url,
        dataType : 'JSON',
        data: data
    })
};
});

//POPUP
$('.staff__ava-btn').on('click', e => {
    $('.staff__popup').toggleClass('staff__popup--active');
    $('.staff__popup-bg').toggleClass('staff__popup-bg--active');
});

$('.popup__btn').on('click', e => {
    $('.staff__popup').toggleClass('staff__popup--active');
    $('.staff__popup-bg').toggleClass('staff__popup-bg--active');
});