// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    window.onload = msgprompt;


    var prompt = document.getElementById('promptpop');
    var close = document.getElementById('close');

    function msgprompt() {
        //display popup window for todays prompt
        prompt.style.display = 'block';


        close.addEventListener('click', function() {
            prompt.style.display = 'none';
        });
    }

  








});
