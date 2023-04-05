let quantityCase 

if (window.innerWidth >= 1910 ){
  quantityCase = 4.2
}
if (window.innerWidth >= 1750 && window.innerWidth <= 1910 ){
  quantityCase = 3.8
}
if (window.innerWidth >= 1450 && window.innerWidth <= 1750 ){
  quantityCase = 3.2
}
if (window.innerWidth >= 1350 && window.innerWidth <= 1450 ){
  quantityCase = 2.8
}
if (window.innerWidth >= 1150 && window.innerWidth <= 1350 ){
  quantityCase = 2.2
}
if (window.innerWidth >= 750 && window.innerWidth <= 1150 ){
  quantityCase = 1.8
}
if (window.innerWidth >= 750 && window.innerWidth <= 1150 ){
  quantityCase = 1.2
}
if (window.innerWidth <= 750){
  quantityCase = 1.8
}
if (window.innerWidth <= 500){
  quantityCase = 1.8
}
if (window.innerWidth <= 400){
  quantityCase = 1.5
}

let swiper = new Swiper(".mySwiper", {
  slidesPerView: quantityCase,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});