const hamburger = document.querySelector('[data-hamburger]');
const close = document.querySelector('[data-close]');
const mobile = document.querySelector('[data-mobile]');

hamburger.addEventListener('click', ()=>{
    mobile.classList.add('show');
    hamburger.classList.add('hide');
    close.classList.add('show');
})

close.addEventListener('click', ()=>{
    mobile.classList.remove('show');
    hamburger.classList.remove('hide');
    close.classList.remove('show');
})