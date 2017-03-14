// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

        window.onload = usertesting;

        var loginpop = document.getElementById('loginpop');
        var close = document.getElementById('close');

        function usertesting() {
            loginpop.style.display = 'block';
            close.addEventListener('click', function() {
                loginpop.style.display = 'none';
            });

        }


});
