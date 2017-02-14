// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //Countdown for Moon Cycle
    //Define the end date for the countdown
    var endtime = new Date('03/12/2017 7:54:49 AM'); //date of next full moon
    var timer;

    //function to calculate time remaining from today till end date
    function timeRemaining() {

        var present = new Date(); //Grab current date
        var t = endtime - present;

        //if countdown ends, start countdown to the next full moon
        if (t < 0) {
            var days = 29.5; //days it takes for full moon cycle
            var t = (Date.parse(endtime) + (days * 24 * 60 * 60 * 1000)) - Date.parse(present); //add 29.5 days to deadline
        }

        var seconds = Math.floor((t / 1000) % 60); //convert to seconds. %60 for remainder
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        //concatenate time to HTML
        document.getElementById('moon').innerHTML = days + ':';
        document.getElementById('moon').innerHTML += hours + ':';
        document.getElementById('moon').innerHTML += minutes + ':';
        document.getElementById('moon').innerHTML += seconds;
    }

    timer = setInterval(timeRemaining, 1000);

    //Countdown for Earth Around Sun
    //Define the end date for the countdown
    var endtimeorbit = new Date('12/31/2017 11:59:59 PM'); //date of full orbit
    var timer;

    //function to calculate time remaining from today till end date
    function timeRemainingorbit() {

        var present = new Date(); //Grab current date
        var t = endtimeorbit - present;

        //if countdown ends, start countdown to the next full orbit
        if (t < 0) {
            var days = 365.256; //days it takes for full orbit around sun
            var t = (Date.parse(endtimeorbit) + (days * 24 * 60 * 60 * 1000)) - Date.parse(present); //add 29.5 days to deadline
        }

        var seconds = Math.floor((t / 1000) % 60); //convert to seconds. %60 for remainder
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        //concatenate time to HTML
        document.getElementById('orbit').innerHTML = days + ':';
        document.getElementById('orbit').innerHTML += hours + ':';
        document.getElementById('orbit').innerHTML += minutes + ':';
        document.getElementById('orbit').innerHTML += seconds;
    }

    timer = setInterval(timeRemainingorbit, 1000);

    //Countdown for Earth Rotation around its axis
    //Define the end date for the countdown
    var endtimeearth = new Date('02/14/2017 11:59:59 PM'); //date of full rotation
    var timer;

    //function to calculate time remaining from today till end date
    function timeRemainingearth() {

        var present = new Date(); //Grab current date
        var t = endtimeearth - present;

        //if countdown ends, start countdown to the next full rotation
        if (t < 0) {
            var days = 365.256; //days it takes for full rotation around axis
            var t = (Date.parse(endtimeearth) + (days * 24 * 60 * 60 * 1000)) - Date.parse(present); //add 29.5 days to deadline
        }

        var seconds = Math.floor((t / 1000) % 60); //convert to seconds. %60 for remainder
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));

        //concatenate time to HTML
        document.getElementById('earth').innerHTML = days + ':';
        document.getElementById('earth').innerHTML += hours + ':';
        document.getElementById('earth').innerHTML += minutes + ':';
        document.getElementById('earth').innerHTML += seconds;
    }

    timer = setInterval(timeRemainingearth, 1000);


    //tool tips


    var moon = document.getElementById('moon');
    var moonTip = document.getElementById('moonTip');

    var orbit = document.getElementById('orbit');
    var orbitTip = document.getElementById('orbitTip');

    var earth = document.getElementById('earth');
    var earthTip = document.getElementById('earthTip');


    var tipTimer;
//when mouse hovers call Timeout
    moon.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showmoonTip, 1000); //delay 1 second
    });

//when mouse out hide tip
    moon.addEventListener('mouseout', function() {
        clearTimeout(tipTimer); //clear timer
        moonTip.style.opacity = 0;
    });

//function to show tip
    function showmoonTip() {
        moonTip.style.opacity = 1;
        moonTip.style.transition = 'all .5s';
    }

    orbit.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showorbitTip, 1000);
    });

    orbit.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        orbitTip.style.opacity = 0;
    });

    function showorbitTip() {
        orbitTip.style.opacity = 1;
        orbitTip.style.transition = 'all .5s';
    }

    earth.addEventListener('mouseover', function() {
        tipTimer = setTimeout(showearthTip, 1000);

    });

    earth.addEventListener('mouseout', function() {
        clearTimeout(tipTimer);
        earthTip.style.opacity = 0;
    });

    function showearthTip() {
        earthTip.style.opacity = 1;
        earthTip.style.transition = 'all .5s';
    }





});
