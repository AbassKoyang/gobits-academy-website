let menu = document.querySelector('#menu__icon')
let nav__list = document.querySelector('.nav__list')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav__list.classList.toggle('open');
}


// swiper js

// <!-- Initialize Swiper -->
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});