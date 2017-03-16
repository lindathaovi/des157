// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //header
    var header = document.getElementById('fixedLogo');
    //fixed navigation
    var fixedNav = document.getElementById('fixed-nav');

    //pages
    var loginPage = document.getElementById('login-page');
    var menuPage = document.getElementById('menu-page');
    var inboxPage = document.getElementById('inbox-page');
    var chatPage = document.getElementById('chat-page');
    var penpalPage = document.getElementById('penpal-page');
    var friendsPage = document.getElementById('friends-page');
    var newsPage = document.getElementById('news-page');
    var settingsPage = document.getElementById('settings-page');
    var langsettingsPage = document.getElementById('langsettings-page');
    var newmsgPage = document.getElementById('newmsg-page');

    //Buttons
    //main menu buttons
    var loginbtn = document.getElementById('loginbtn');
    var messagebtn = document.getElementById('messagebtn');
    var penpalbtn = document.getElementById('penpalbtn');
    var friendsbtn = document.getElementById('friendsbtn');
    var newsbtn = document.getElementById('newsbtn');
    var settingsbtn = document.getElementById('settingsbtn');
    //fixed nav Buttons
    var navHomebtn = document.getElementById('nav-homebtn');
    var navInboxbtn = document.getElementById('nav-inboxbtn');
    var navPenpalsbtn = document.getElementById('nav-penpalsbtn');
    var navFriendsbtn = document.getElementById('nav-friendsbtn');
    var navNewsbtn = document.getElementById('nav-newsbtn');
    //back buttons
    var chatroombtn = document.getElementById('chatroombtn'); //from inbox to chatroom
    var chatbackbtn = document.getElementById('chat-backbtn'); //from chatroom back to inbox
    var languagebtn = document.getElementById('languagebtn'); //from settings to language settings
    var langbackbtn = document.getElementById('lang-backbtn');
    //misc buttons
    var newmsgbtn = document.getElementById('newmsgbtn'); //create new message

    //pop upu windows
    var prompt = document.getElementById('promptpop');
    var close = document.getElementById('close');




    //FORM SUBMIT
    document.login.onsubmit = processLogin;
    // document.newmsgForm.onsubmit = processNewmsg;

    function processLogin() {
        var userName = document.login.userName.value;

        //alert if no username is inserted
        // if(userName == ''){
        //   alert('Please enter a valid username');
        //
        //   return false;
        // }


        //NAVIGATION

        //display menu page and hide login
        loginPage.style.display = 'none';
        menuPage.style.display = 'block';
        header.style.display = 'block';

        //insert name in menupage greeting
        var greeting = document.getElementById('greeting');
        greeting.innerHTML = 'Good Evening, ' + userName;

        return false; //prevent page from reloading
    }

    function processNewMsg() {
        var newMsg = document.newmsgForm.newMsg.value;

      //  alert if no msg is inserted
        if(newMsg == ''){
          alert('Please enter a message');

          return false;
        }

        //hide form
        newmsgPage.style.display = 'none';

        return false; //prevent page from reloading
    }



    //display inbox
    messagebtn.addEventListener('click', function() {

        menuPage.style.display = "none";
        inboxPage.style.display = "block";
        fixedNav.style.display = "block";
        header.style.display = 'none';
    });

    //display penpals
    penpalbtn.addEventListener('click', function() {
        menuPage.style.display = "none";
        penpalPage.style.display = "block";
        fixedNav.style.display = "block";
        header.style.display = 'none';
    });

    //display friends
    friendsbtn.addEventListener('click', function() {
        menuPage.style.display = "none";
        friendsPage.style.display = "block";
        fixedNav.style.display = "block";
        header.style.display = 'none';
    });

    //display news page
    newsbtn.addEventListener('click', function() {
        menuPage.style.display = "none";
        newsPage.style.display = "block";
        fixedNav.style.display = "block";
        header.style.display = 'none';
    });

    //display settings page
    settingsbtn.addEventListener('click', function() {
        menuPage.style.display = "none";
        settingsPage.style.display = "block";
        fixedNav.style.display = "block";
        header.style.display = 'none';
    });

    //display language settings
    languagebtn.addEventListener('click', function() {
        settingsPage.style.display = "none";
        langsettingsPage.style.display = "block";
        header.style.display = 'none';
    });

    //back button from language settings
    langbackbtn.addEventListener('click', function() {
        langsettingsPage.style.display = "none";
        settingsPage.style.display = "block";
        header.style.display = 'none';
    });

    //display chatroom
    chatroombtn.addEventListener('click', function() {
        inboxPage.style.display = "none";
        chatPage.style.display = "block";
        header.style.display = 'none';

        prompt.style.display = 'block'; //display daily prompts

        close.addEventListener('click', function() { //close prompt
            prompt.style.display = 'none';
        });
    });

    //back button from chatroom
    chatbackbtn.addEventListener('click', function() {

        chatPage.style.display = "none";
        inboxPage.style.display = "block";
        header.style.display = 'none';
    });

    //fixed nav buttons


    //to home
    navHomebtn.addEventListener('click', function() { //from inbox
        inboxPage.style.display = "none";
        menuPage.style.display = "block";
        fixedNav.style.display = "none";
        header.style.display = 'block';
    });
    navHomebtn.addEventListener('click', function() { //from penpals
        penpalsPage.style.display = "none";
        menuPage.style.display = "block";
        fixedNav.style.display = "none";
        header.style.display = 'block';
    });
    navHomebtn.addEventListener('click', function() { //from friends
        friendsPage.style.display = "none";
        menuPage.style.display = "block";
        fixedNav.style.display = "none";
        header.style.display = 'block';
    });
    navHomebtn.addEventListener('click', function() { //from news
        newsPage.style.display = "none";
        menuPage.style.display = "block";
        fixedNav.style.display = "none";
        header.style.display = 'block';
    });
    navHomebtn.addEventListener('click', function() { //from settings
        settingsPage.style.display = "none";
        penpalPage.style.display = "none";
        menuPage.style.display = "block";
        fixedNav.style.display = "none";
        header.style.display = 'block';
    });

    //to inbox
    navInboxbtn.addEventListener('click', function() { //from penpals
        penpalPage.style.display = "none";
        inboxPage.style.display = "block";
    });
    navInboxbtn.addEventListener('click', function() { //from friends
        friendsPage.style.display = "none";
        inboxPage.style.display = "block";
    });
    navInboxbtn.addEventListener('click', function() { //from news
        newsPage.style.display = "none";
        inboxPage.style.display = "block";
    });
    navInboxbtn.addEventListener('click', function() { //from settings
        settingsPage.style.display = "none";
        inboxPage.style.display = "block";
    });

    //to penpals
    navPenpalsbtn.addEventListener('click', function() { //from inbox
        inboxPage.style.display = "none";
        penpalPage.style.display = "block";
    });
    navPenpalsbtn.addEventListener('click', function() { //from friends
        friendsPage.style.display = "none";
        penpalPage.style.display = "block";
    });
    navPenpalsbtn.addEventListener('click', function() { //from news
        newsPage.style.display = "none";
        penpalPage.style.display = "block";
    });
    navPenpalsbtn.addEventListener('click', function() { //from settings
        settingsPage.style.display = "none";
        penpalPage.style.display = "block";
    });

    //to friends
    navFriendsbtn.addEventListener('click', function() { //from inbox
        inboxPage.style.display = "none";
        friendsPage.style.display = "block";
    });
    navFriendsbtn.addEventListener('click', function() { //from penpals
        penpalPage.style.display = "none";
        friendsPage.style.display = "block";
    });
    navFriendsbtn.addEventListener('click', function() { //from news
        newsPage.style.display = "none";
        friendsPage.style.display = "block";
    });
    navFriendsbtn.addEventListener('click', function() { //from settings
        settingsPage.style.display = "none";
        friendsPage.style.display = "block";
    });

    //to news
    navNewsbtn.addEventListener('click', function() { //from inbox
        inboxPage.style.display = "none";
        newsPage.style.display = "block";
    });
    navNewsbtn.addEventListener('click', function() { //from penpals
        penpalPage.style.display = "none";
        newsPage.style.display = "block";
    });
    navNewsbtn.addEventListener('click', function() { //from friends
        friendsPage.style.display = "none";
        newsPage.style.display = "block";
    });
    navNewsbtn.addEventListener('click', function() { //from settings
        settingsPage.style.display = "none";
        newsPage.style.display = "block";
    });

    //show form for create new message button












});