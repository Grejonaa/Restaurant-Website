
let menus= document.querySelector("nav");
let menuBTN= document.querySelector(".menu-btn");
let closeBTN= document.querySelector(".close-btn");

menuBTN.addEventListener("click",function(){
    menus.classList.add("active");
})

closeBTN.addEventListener("click",function(){
    menus.classList.remove("active");
})

/* Swiper JS */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        968:{
            slidesPerView: 3,
        },
    }
  });

 