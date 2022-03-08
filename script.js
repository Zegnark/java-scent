let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
} 

let searchInfo = document.querySelector('.search-info');

document.querySelector('#search-btn').onclick = () =>{
    searchInfo.classList.toggle('active');
} 
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
} 