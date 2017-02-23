// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //assemble api url
    var key = "AIzaSyD3Q0DjTctqKY9vZCuPdgKmgnIrDTXlvow";
    var source = "en";
    var target = "fr";
    var url = 'https://www.googleapis.com/language/translate/v2?';

    //capture submit event
    document.chatbox.onsubmit = processForm2;

    function processForm2() {
        url = 'https://www.googleapis.com/language/translate/v2?'; //resets api url when resubmitted
        console.log('processForm2');

        var translatedMsg = document.getElementById('translatedMsg'); //capture translated element
        var originalMsg = document.chatbox.originalMsg.value;
        url += 'key=' + key + '&source=' + source + '&target=' + target + '&q=' + originalMsg;

        // translate text
        translate(url);

        //reveal response div on submit
        var unhide = document.getElementById('response').style.visibility = 'visible';

        return false; //prevent page from reloading
    }


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
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

});
