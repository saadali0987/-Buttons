let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')
let searchForm = document.querySelector('#search-form')
let closeSearch = document.querySelector('#close')
let searchIcon = document.querySelector('#search-icon')



menu.addEventListener("click", ()=>{
    menu.classList.toggle('fa-times')
    console.log("hello")
    navbar.classList.toggle('active')
})

window.addEventListener("scroll", ()=>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
})

searchIcon.addEventListener('click', ()=>{
    searchForm.classList.toggle('active')
})

closeSearch.addEventListener("click", ()=>{
    searchForm.classList.remove('active')
})



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });