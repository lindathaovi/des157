// JavaScript Document
console.log('reading')

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // capture submit event
 document.madlib.onsubmit = processForm;

 //create and define processForm
function processForm(){
//store separate inputs into variables
 var userName = document.madlib.userName.value;
 var food = document.madlib.food.value;
 var drink = document.madlib.drink.value;
 var number = document.madlib.number.value;
 var adj1 = document.madlib.adj1.value;
 var subject = document.madlib.subject.value;
 var noun1 = document.madlib.noun1.value;
 var sticky = document.madlib.sticky.value;
 var person = document.madlib.person.value;


 //alert message if any form elements not answered
 if(userName == '' || food == '' || drink == '' || number == '' || adj1 ==''
 || subject == '' || noun1 == '' || sticky == '' || person == ''){
   alert("HEY! waaaiittt. I know you're sleep deprived but you need to fill out everything" );

   return false;
 }


 //capture response element
 var response = document.getElementById('response');

 //calling inner to concatenate madlib message
 response.innerHTML= "Dear Diary, <br><br>" +food+ ". Please. I haven't eaten in "
 + number + " days. I've been surviving off of " + drink + ".<br><br> Besides that, my day has been pretty "
 + adj1 + ". I woke up this morning. Good start in my book. <br> <br>I didn’t sleep last night because my "
 + subject + " project is due today. I'm inspired by " + person + ". My exacto knife is dull from cutting out all these "
 + noun1 + "s. I ran out of glue so I used " + sticky + " instead. I think it works. Wish me luck!"
 + "<br><br>Sincerely,<br>" + userName;

//prevent page from reloading
return false;



}



});
