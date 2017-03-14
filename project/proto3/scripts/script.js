// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    window.onload = msgprompt;
    window.onload = usertesting;


    var prompt = document.getElementById('promptpop');
    var loginpop = document.getElementById('loginpop');
    var logoutpop = document.getElementById('logoutpop');
    var clicklogout= document.getElementById('clicklogout');
    var logoutverify= document.getElementById('logoutbtn');
    var close = document.getElementById('close');

    function msgprompt() {
        //display popup window for todays prompt
        prompt.style.display = 'block';


        close.addEventListener('click', function() {
            prompt.style.display = 'none';
        });
    }

    function usertesting() {
        loginpop.style.display = 'block';
        close.addEventListener('click', function() {
            loginpop.style.display = 'none';
        });

    }


        logoutbutton.addEventListener('click', function() {
        logoutpop.style.display = 'block'; });

        close.addEventListener('click', function() {
            logoutpop.style.display = 'none';
        });












});
