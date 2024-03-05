let shoppingCart =document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-btn').onclick=()=>{
  shoppingCart.classList.toggle('active');
}

let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
  navbar.classList.toggle('active');
}