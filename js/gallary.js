let sap = document.querySelector('#all');
let schoolsch = document.querySelector('#schools');
let scl_eve = document.querySelector('#events');
let scl_spo = document.querySelector('#sports');

let btnAll = document.querySelector('#all_btn');
let btnScl = document.querySelector('#school_btn');
let btnEve = document.querySelector('#event_btn');
let btnSpo = document.querySelector('#sport_btn');


schoolsch.style.display = 'none';
scl_eve.style.display = 'none';
scl_spo.style.display = 'none';
btnAll.style = "color: rgb(120, 150, 170); font-size: 1.9rem";


btnScl.addEventListener('click', () => {
    scl_eve.style.display = 'none';
    scl_spo.style.display = 'none';
    sap.style.display = 'none';
    btnScl.style = "color: rgb(120, 150, 170); font-size: 1.9rem";
    btnAll.style = 'none';
    btnEve.style = 'none';
    btnSpo.style = 'none';
    schoolsch.style.display = "";
});
btnAll.addEventListener('click', () => {
    scl_eve.style.display = 'none';
    scl_spo.style.display = 'none';
    sap.style.display = '';
    btnAll.style = "color: rgb(120, 150, 170); font-size: 1.9rem";
    btnScl.style = 'none';
    btnEve.style = 'none';
    btnSpo.style = 'none';
    // btnEve.style = "color: black; font-size: 1.5rem";
    schoolsch.style.display = 'none';
});
btnEve.addEventListener('click', () => {
    scl_eve.style.display = '';
    scl_spo.style.display = 'none';
    sap.style.display = 'none';
    btnEve.style = "color: rgb(120, 150, 170); font-size: 1.9rem";
    btnScl.style = 'none';
    btnAll.style = 'none';
    btnSpo.style = 'none';
    schoolsch.style.display = 'none';
});
btnSpo.addEventListener('click', () => {
    scl_eve.style.display = 'none';
    scl_spo.style.display = '';
    sap.style.display = 'none';
    btnSpo.style = "color: rgb(120, 150, 170); font-size: 1.9rem";
    btnEve.style = 'none';
    btnAll.style = 'none';
    btnScl.style = 'none';
    schoolsch.style.display = 'none';
});