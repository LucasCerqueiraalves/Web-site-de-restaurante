let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    
    navbar.classList.toggle('active');

}



window.onscroll = () => {
    menu.classList.remove('bx bx-x');
    navbar.classList.remove('active');

    

}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },

  loop:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 3,
    },

  },
});

function loader () {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 2000);
}

window.onload = fadeOut;

escuro = document.querySelector('.dark');
body = document.querySelector('.body');
header = document.querySelector('.header');
dishes = document.querySelector('.dishes');
menuDark = document.querySelector('.menu');
peca = document.querySelector('.order');
escuro.onclick = () => {
    body.classList.toggle('active');
    header.classList.toggle('active');
    dishes.classList.toggle('active');
    menuDark.classList.toggle('active');
    peca.classList.toggle('active');
}