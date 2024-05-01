let tl=gsap.timeline();

tl.from(".gsap1",{
    // y:-50,
    scale:0,
    delay:0.3,
    stagger:0.2,
    duration:0.5,
    opacity:0,
})
tl.from(".gsap2",{
    x:-200,
    // scale:0,
    delay:0.3,
    stagger:0.2,
    duration:0.5,
    opacity:0,

})

let burger=document.querySelector(".burger");
burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    let navLeft=document.querySelector(".nav-left");
    navLeft.classList.toggle("chota_screen");
})