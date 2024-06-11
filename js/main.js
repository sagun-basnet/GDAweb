window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled',window.scrollY>0);
});
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled-stop',window.scrollY>5750);
});

// typing animation script..................................
var typing = new Typed(".typing", {
    strings: ["A Face of Future"],
    typeSpeed: 100,
    backSpeed: 80,
    loop: true
});

//Learn More....................................................
let com_btn = document.querySelector('#com-btn');
let man_btn = document.querySelector('#man-btn');
let main_cont = document.querySelector('#learnMore');
let com_cont = document.querySelector('#comp');
let man_cont = document.querySelector('#mana');
let clo_btn1 = document.querySelector('#close-btn1');
let clo_btn2 = document.querySelector('#close-btn2');

com_btn.addEventListener('click', () =>{
    main_cont.style.display = 'block';
    com_cont.style.display = 'block';
    com_btn.style.backgroundColor = "rgb(10, 255, 10)";
    man_cont.style.display = 'none';
    man_btn.style.backgroundColor = "white";
});
clo_btn1.addEventListener('click', () =>{
    man_btn.style.backgroundColor = "white";
    com_btn.style.backgroundColor = "white";
    main_cont.style.display = 'none';
});
clo_btn2.addEventListener('click', () =>{
    man_btn.style.backgroundColor = "white";
    com_btn.style.backgroundColor = "white";
    main_cont.style.display = 'none';
});

man_btn.addEventListener('click', () =>{
    main_cont.style.display = 'block';
    com_cont.style.display = 'none';
    man_cont.style.display = 'block';
    man_btn.style.backgroundColor = "rgb(10, 255, 10)";
    com_btn.style.backgroundColor = "white";
});

// loading Animation............ 
let loader = document.querySelector('#preloader');


function pre_loading(){
    loader.style.display = 'none';
    
}