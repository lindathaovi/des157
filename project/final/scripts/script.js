// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //meesenger alert window for the days prompt
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

    //Greeting user with userName

    document.login.onsubmit = processLogin;

    function processLogin() {
      var userName = document.login.userName.value;

      if(userName == ''){
        alert('Please enter a valid username');

        return false;
      }

      var greeting = document.getElementById('greeting');

      greeting.innerHTML= 'Good Morning, '+userName;

      console.log('good morning '+ userName);

    }










});
