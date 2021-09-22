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