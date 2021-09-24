let menu = document.querySelector('#menu-btn')
let navBar = document.querySelector('.navbar')
menu.addEventListener('click',() =>{
    navBar.classList.toggle('active')
    menu.classList.toggle('fa-times')  
})

window.onscroll= () =>{
    navBar.classList.remove('active')
    menu.classList.remove('fa-times')
}

let images  = document.querySelectorAll('.image-slider img')

images.forEach((img) =>{
    img.addEventListener('click',() =>{
        let src = img.getAttribute('src')
        let mainImg = document.querySelector('.main-home-img')
        mainImg.src = src
    })
})


// swiper sliders  JS starts 
var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 0,
        },
        768: {
          slidesPerView: 2,
        },
    },
    loop : true,
    grabCursor:true,
  });