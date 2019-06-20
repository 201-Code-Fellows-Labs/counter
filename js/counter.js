'use strict'
let num = 0;
let number = document.getElementById('number');
let inc = document.getElementById('inc');
let dec = document.getElementById('dec');

inc.addEventListener('click', increment);
dec.addEventListener('click', decrement); 

function increment(){
    num++;
    number.innerHTML = num;
    numCheck();
    localStorage.setItem('counter', num);
    checkLocalStorage();
  
}
function decrement (){
    num--;
    number.innerHTML = num;
    numCheck();
    localStorage.setItem('counter', num);
    checkLocalStorage();
  
}

function numCheck(){
    if (num < 0) {
        number.className = 'neg';
    } else{
        number.className = 'pos';
    }
}

function checkLocalStorage(){
    num = localStorage.getItem('counter');
    if (num === null){
        num = 0;
    }
    number.innerHTML = num;
    numCheck();
}

checkLocalStorage();