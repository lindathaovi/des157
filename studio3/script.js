// JavaScript Document

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here


//capture images by ID into variable
var zz = document.getElementById('zz');
var eche = document.getElementById('eche');
var angelina = document.getElementById('angelina');
var portu = document.getElementById('portu');
var burro = document.getElementById('burro');

//hover eventListener to color img and plant name
zz.addEventListener('mouseover', function(){
  zz.src='images/zzcolor.png';
});

eche.addEventListener('mouseover', function(){
  eche.src='images/echeveriacolor.png';
});

angelina.addEventListener('mouseover',function(){
  angelina.src='images/angelinacolor.png';
});

portu.addEventListener('mouseover', function(){
  portu.src='images/portulacariacolor.png';
});

burro.addEventListener('mouseover', function(){
  burro.src='images/burrocolor.png';
});

//mouseout reverts back to black and white sketch
zz.addEventListener('mouseout', function(){
  zz.src='images/zzplant.png';
});

eche.addEventListener('mouseout', function(){
  eche.src='images/echeveria.png';
});

angelina.addEventListener('mouseout',function(){
  angelina.src='images/angelina.png';
});

portu.addEventListener('mouseout', function(){
  portu.src='images/portulacaria.png';
});

burro.addEventListener('mouseout', function(){
  burro.src='images/burro.png';
});




















});
