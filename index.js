const canvas1=document.getElementById('canvas1');
const canvas2=document.getElementById('canvas2');
const ctx1=canvas1.getContext('2d');
const ctx2=canvas2.getContext('2d');

// ctx1.fillRect(0,0,100,100);
// ctx2.fillRect(0,0,100,100);
let image1=new Image();
image1.src='men.png';
let image2=new Image();
image2.src='shadow_dog.png';

let gameSpeed=0;
let staggerSpeed=4;

let frame1=0;
let frame2=0;
let maxFrame1=24;
let maxFrame2=8;


function animate(){

    ctx1.clearRect(0,0,canvas1.width,canvas1.height);
    ctx2.clearRect(0,0,canvas2.width,canvas2.height);

    ctx1.drawImage(image1,frame1*801,0,801,738,0,0,canvas1.width,canvas1.height);
    ctx2.drawImage(image2,frame2*573,3*523,573,523,0,0,canvas2.width,canvas2.height);
    if(gameSpeed%staggerSpeed==0){
        frame1++;
        frame2++;
    }
    if(frame1>maxFrame1) frame1=0;
    if(frame2>maxFrame2) frame2=0;
    gameSpeed++;

    requestAnimationFrame(animate);
}
animate();


// left side
const text=document.querySelector(".text_2");
const text_load=()=>{
    setTimeout(() => {

        text.style.color="#5755FE"
        text.textContent="Developer"
    }, 4000);
    setTimeout(() => {
        text.style.color="#5755FE";
        text.textContent="Problem Solver"
    }, 8000);
    setTimeout(() => {
        text.style.color="#5755FE";
        text.textContent="Traveller"
    }, 12000);
}
text_load();
setInterval(text_load,12000);

// adding gsap

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
    y:-50,
    // scale:0,
    delay:0.3,
    stagger:0.2,
    duration:1,
    opacity:0,
})
tl.from(".gsap3",{
    x:-150,
    // scale:0,
    delay:0.3,
    stagger:0.2,
    duration:1,
    opacity:0,
})
tl.from(".gsap4",{
    x:-50,
    // scale:0,
    delay:0.3,
    stagger:0.2,
    duration:1,
    opacity:0,
})


// responsiveness burger icon
let burger=document.querySelector(".burger");
burger.addEventListener("click",()=>{
    burger.classList.toggle("active");
    let navLeft=document.querySelector(".nav-left");
    navLeft.classList.toggle("chota_screen");
})