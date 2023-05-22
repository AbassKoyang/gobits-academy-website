let menu = document.querySelector('#menu__icon')
let nav__list = document.querySelector('.nav__list')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    nav__list.classList.toggle('open');
}
