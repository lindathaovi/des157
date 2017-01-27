// JavaScript Document
console.log('reading')

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture submit event
 document.madlib.onsubmit = processForm;

 //create and define processForm
function processForm(){
//store separate inputs into variables
 var userSex = document.madlib.userSex.value;
 var adj1 = document.madlib.adj1.value;
 var noun1 = document.madlib.noun1.value;


 //alert message if any form elements not answered
 if(noun1 == '' || userSex == 'blank' || adj1 == ' '){
   alert("HEY! waaaiittt" );

   return false;
 }


 //capture response element
 var response = document.getElementById('response');

 //calling inner to concatenate madlib message
 response.innerHTML= 'Hey ' +userSex + ', ' +
 '<br> Shall I compare thee to a ' + adj1 + ' ' + noun1;

//prevent page from reloading
return false;



}



});
