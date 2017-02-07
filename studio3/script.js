// JavaScript Document

console.log('reading');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // all other js here

//changing plant images of main when hovering to color images
//capture images by ID into variable
var zz = document.getElementById('zz');
var eche = document.getElementById('eche');
var angelina = document.getElementById('angelina');
var portu = document.getElementById('portu');
var burro = document.getElementById('burro');


//hover eventListener to color img and plant name
zz.addEventListener('mouseover', function(){
  zz.src = 'images/zzcolor.png'; //change to color img
  zz.className = "fadein"; //fade in color




});

eche.addEventListener('mouseover', function(){
  eche.src='images/echeveriacolor.png';
  eche.className = "fadein";



});

angelina.addEventListener('mouseover',function(){
  angelina.src='images/angelinacolor.png';
  angelina.className = "fadein";


});

portu.addEventListener('mouseover', function(){
  portu.src='images/portulacariacolor.png';
  portu.className = "fadein";


});

burro.addEventListener('mouseover', function(){
  burro.src='images/burrocolor.png';
  burro.className = "fadein";


});

//mouseout reverts back to black and white sketch
zz.addEventListener('mouseout', function(){
  zz.src ='images/zzplant.png';
  zz.className = "fade"; //fade img


});

eche.addEventListener('mouseout', function(){
  eche.src='images/echeveria.png';
  eche.className = "fade";


});

angelina.addEventListener('mouseout',function(){
  angelina.src='images/angelina.png';
  angelina.className = "fade";


});

portu.addEventListener('mouseout', function(){
  portu.src='images/portulacaria.png';
  portu.className = "fade";


});

burro.addEventListener('mouseout', function(){
  burro.src='images/burro.png';
  burro.className = "fade";


});

//capture divs by ID into variables

var plantInfo = document.getElementById('plantInfo');
var plantImg = document.getElementById('plantImg');
var plantName = document.getElementById('plantName');

//When plant images on main are clicked, scroll down to plant info and lone image
//stands. scroll over to see info

//clicking on main image calls plant image.
zz.addEventListener('click', function(){
  plantImg.innerHTML="<img src='images/zzcolor.png'>"; //plant image
  plantImg.addEventListener('mouseover', function(){ //another listener waits for hover to display info
    plantInfo.innerHTML="This is a zz plant. Otherwise known as Zamioculcas Zamifolia. I bought this at IKEA on a whim to match my housemate who also had one. This was the beginning of my plant collection. The cockroach of plants. It will never die.";
    plantName.innerHTML="ZZ Plant";

  });
//mouseout clears info displayed
  plantImg.addEventListener('mouseout', function(){
    plantInfo.innerHTML="";
    plantName.innerHTML="";

  });

});

//clicking on main image calls plant image.
eche.addEventListener('click', function(){
  plantImg.innerHTML="<img src='images/echeveriacolor.png'>"; //plant image
  plantImg.addEventListener('mouseover', function(){ //another listener waits for hover to display info
    plantInfo.innerHTML="Also known as Echeveria Subsessilis. I bought this succulent when I visited Filoli in Woodside,CA. The Carrington Mansion sold many of the plants featured in their 16 acre garden but because I didn't want to kill their prettier plants, I bought a succulent. Slooooow and steady.";
    plantName.innerHTML="Morning Beauty";
  });
//mouseout clears info displayed
  plantImg.addEventListener('mouseout', function(){
    plantInfo.innerHTML="";
    plantName.innerHTML="";
  });

});

//clicking on main image calls plant image.
angelina.addEventListener('click', function(){
  plantImg.innerHTML="<img src='images/angelinacolor.png'>"; //plant image
  plantImg.addEventListener('mouseover', function(){ //another listener waits for hover to display info
    plantInfo.innerHTML="I have no idea what this plant is called. Google failed me. I bought it at a flea market on a whim. I was too easily convinced by the lady. It's a pretty plant with long pale green stalks and leaves. I consider this plant level 2 of my plant caretaking adventures because it will die if I don't water it more frequently than once a month.";
    plantName.innerHTML="IDK";
  });
//mouseout clears info displayed
  plantImg.addEventListener('mouseout', function(){
    plantInfo.innerHTML="";
    plantName.innerHTML="";
  });

});

//clicking on main image calls plant image.
portu.addEventListener('click', function(){
  plantImg.innerHTML="<img src='images/portulacariacolor.png'>"; //plant image
  plantImg.addEventListener('mouseover', function(){ //another listener waits for hover to display info
    plantInfo.innerHTML="Also known as Portulacaria Afra. I also bought this one at the flea market. However, this one was intentional. I thought the succulent looked interesting. It's doing okayish on my window sill but I think it needs more sunlight. The half that faces the window looks great while the other face facing my room might need some help. ";
    plantName.innerHTML="Elephant Bush";
  });
//mouseout clears info displayed
  plantImg.addEventListener('mouseout', function(){
    plantInfo.innerHTML="";
    plantName.innerHTML="";
  });

});

//clicking on main image calls plant image.
burro.addEventListener('click', function(){
  plantImg.innerHTML="<img src='images/burrocolor.png'>"; //plant image
  plantImg.addEventListener('mouseover', function(){ //another listener waits for hover to display info
    plantInfo.innerHTML="Sedum morganianum. I saw this plant at my cousin's house and cut off a few stems to take home to propagate. I think I leveled up to level 3 in plant caretaking because it looks like it's still alive 3 months later.";
    plantName.innerHTML="Burro's Tail";
  });
//mouseout clears info displayed
  plantImg.addEventListener('mouseout', function(){
    plantInfo.innerHTML="";
    plantName.innerHTML="";
  });

});




});
