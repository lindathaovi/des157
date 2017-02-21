// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // all other js here

    //assemble api url
    // var originalMsg = document.getElementById('originalMsg').innerHTML; //returns text in original msg
    var key="AIzaSyD3Q0DjTctqKY9vZCuPdgKmgnIrDTXlvow";
    var source="en";
    var target="fr";
    var url = 'https://www.googleapis.com/language/translate/v2?';

    //capture submit event
    //document.chatbox.onsubmit = processForm(url, key, source, target);

    document.chatbox.onsubmit=processForm2;
    function processForm2(){
      url = 'https://www.googleapis.com/language/translate/v2?';
      console.log('processForm2');
      //store message into variable
     //   //  var originalMsg = document.chatbox.originalMsg.value;

       var translatedMsg = document.getElementById('translatedMsg'); //capture translated element
     //  translatedMsg.innerHTML= 'Your message translated: '+ trans; //call innerhtml to place new translated message

      var originalMsg = document.chatbox.originalMsg.value;
        url += 'key='+key+'&source='+source+'&target='+target+'&q='+originalMsg;

        // translate text
        translate(url);

        return false; //prevent page from reloading
    }


//
// //define processform
// function processForm (url, key, source, target) {
//   console.log('processForm');
//    //store message into variable
//   //  var originalMsg = document.chatbox.originalMsg.value;
//
//    var translatedMsg = document.getElementById('translatedMsg'); //capture translated element
//   //  translatedMsg.innerHTML= 'Your message translated: '+ trans; //call innerhtml to place new translated message
//
//   var originalMsg = document.chatbox.originalMsg.value;
//   url += 'key='+key+'&source='+source+'&target='+target+'&q='+originalMsg;
//
//   // translate text
//   translate(url);
//
//   return false; //prevent page from reloading
// }
//parse json into js object
function translate(url) {
      console.log(url)
      var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          myObj = JSON.parse(this.responseText);
          document.getElementById("translatedMsg").innerHTML = myObj.data.translations[0].translatedText;
      }
  };
  xmlhttp.open("GET", url , true);
  xmlhttp.send();
}

});
