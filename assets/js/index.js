"use strict";


// ---------------------------------------------------------------- variable ----------------------------------------------------------------
const togle_menu = $('#togle_menu');
const menu_btn = $('#menu_btn');
const close_btn = $('#close_btn');
const swiper = $('#swiper');
const turn_left = $('#left-turn');
const turn_right = $('#right-turn');
let sum = 0;
let son = 0;
const popup_wrapper = $('#popup-wrapper');
const body = $('body');
const popup = $('.popup');
const popup_succes = $('.popup_succes');
const popup_btn = $('#popup_btn');
const send = $('#send');
const close_popup = $('#close_popup');
const close_btn2 = $('#close_btn2');
const close_btn3 = $('#close_btn3');
const respons_popup_btn = $('#respons_popup');



// ---------------------------------------------------------------- events ----------------------------------------------------------------

respons_popup_btn.addEventListener('click', () => {
    popup_wrapper.style.cssText = 'display: block!important;';
    body.style.cssText = 'overflow: hidden!important;';
    popup.style.cssText = 'display: flex!important;';
})

close_btn2.addEventListener('click', () => {
    popup_succes.style.cssText = 'display: none';
    popup_wrapper.style.cssText = 'display: none;';
    body.style.cssText = 'overflow: auto;';
});

close_btn3.addEventListener('click', () => {
    popup_wrapper.style.cssText = 'display: none';
    body.style.cssText = 'overflow: auto;';
    popup_succes.style.cssText = 'display: none';
});

send.addEventListener("click", () => {
    setTimeout(() => {
        popup.style.cssText = 'display: none';
        popup_succes.style.cssText = 'display: block;'
    }, 500)
});

popup_btn.addEventListener('click', () => {
    popup_wrapper.style.cssText = 'display: block!important;';
    body.style.cssText = 'overflow: hidden!important;';
    popup.style.cssText = 'display: flex!important;';
});

close_popup.addEventListener('click', () => {
    popup_wrapper.style.cssText = 'display: none!important;';
    body.style.cssText = 'overflow: auto!important;';
    popup.style.cssText = 'display: none!important;';
});

menu_btn.addEventListener('click', () => {
    togle_menu.classList.toggle('togle');
});

close_btn.addEventListener('click', () => {
    togle_menu.classList.toggle('togle');
});

turn_right.addEventListener('click', () => {
   turn_rightt();
});

turn_left.addEventListener('click', () => {
    if(sum == 0) {
        sum = 5;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }else if(sum != 0){
        sum -= 1;
        swiper.style.cssText = `transform: translateX(-${sum * 377}px);`
    }
});


// ---------------------------------------------------------------- functions ----------------------------------------------------------------

function turn_rightt(){
    if(son != 5) {
        son +=1;
        swiper.style.cssText = `transform: translateX(-${son * 377}px);`
    }else if(son == 5){
        son = 0;
        swiper.style.cssText = `transform: translateX(0px);`
    }
}

setInterval(() => {
    turn_rightt();
}, 3000)