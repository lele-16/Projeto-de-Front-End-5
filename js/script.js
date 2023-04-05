let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
    buscaForm.classList.remove('active')
   //  searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let buscaForm = document.querySelector('.busca-form');

document.querySelector("#busca-btn").onclick = () =>{
    buscaForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector("#cart-btn").onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    buscaForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    buscaForm.classList.remove('active');
    cartItem.classList.remove('active');
}





// let navbar = document.querySelector('.navbar'); 

// document.querySelector('#menu-btn').onclick = () =>{
//    navbar.classList.toggle('active') 
//    searchForm.classList.remove('active')
//    cartItem.classList.remove('active') 
// }

// let search = document.querySelector('.search-form'); 

// document.querySelector('#search-btn').onclick = () =>{
//    searchForm.classList.toggle('active') 
//    navbar.classList.remove('active')
//    cartItem.classList.remove('active') 
// }


// let cartItem = document.querySelector('.cart-items-container'); 

// document.querySelector('#cart-btn').onclick = () =>{
//    cartItem.classList.toggle('active') 
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active')
//     searchForm.classList.remove('active')
//     cartItem.classList.remove('active') 
// }
