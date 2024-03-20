let hamburgerMenu = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile_nav')
let defaultClass = document.querySelector('.default')
let cancel = document.querySelector('.cancel')
const swiper = document.querySelector('.swiper').swiper;

hamburgerMenu.addEventListener("click" , function(){
    
    // mobileMenu.classList.add('default');
    mobileMenu.style.top = '0%'
    hamburgerMenu.style.display= 'none'
    cancel.style.display= 'block'
})
 
cancel.addEventListener("click" , () => {
    mobileMenu.style.top = '-100%'
    cancel.style.display= 'none'
    hamburgerMenu.style.display= 'block'
})
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If you need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
