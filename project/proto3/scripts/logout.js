// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");



        var logoutpop = document.getElementById('loginpop');
        var clicklogout = document.getElementById('clicklogout');
        var logoutbtn = document.getElementById('logoutbtn');
        var close = document.getElementById('close');


            clicklogout.addEventListener('click', function() {
                logoutpop.style.display = 'block';
            });

      


});
