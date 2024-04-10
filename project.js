let tl=gsap.timeline();

tl.from(".gsap1",{
    // y:-50,
    scale:0,
    delay:0.3,
    stagger:0.2,
    duration:0.5,
    opacity:0,
})

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });