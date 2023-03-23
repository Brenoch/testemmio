// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
/*Função de fazer com que o botão feche a barra responsiva*/ 
if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}