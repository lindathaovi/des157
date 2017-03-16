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
    var onboardingPage = document.getElementById('onboarding-page');
    var newpalPage = document.getElementById('newpal-page');

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
    var newmsgSubmit = document.getElementById('newmsg-submit');
    var newpalbtn = document.getElementById('newpalbtn');
    var newpalSubmit = document.getElementById('newpal-submit');
    //firebase buttons
    var signInButton = document.getElementById("sign-in-button");

    //user
    var greeting = document.getElementById('greeting');
    var userId;
    var userName = "null";



    //pop upu windows
    var prompt = document.getElementById('promptpop');
    var close = document.getElementById('close');
    var msgclose = document.getElementById('msgclose');
    var onboardingclose = document.getElementById('onboardingclose');
    var palclose = document.getElementById('palclose');


    signInButton.addEventListener('click', function() {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);

    });

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            greeting.innerHTML = 'Good Evening, ' + user.displayName;
            userId = user.uid;
            userName = user.displayName;
            console.log(userId);
            writeUserData(uid, displayName, email, photoURL);

            if (userName != "null") {
                loginPage.style.display = "none";
                menuPage.style.display = "block";
                header.style.display = "block";

            }

        } else {
            currentUser.innerHTML = "Stranger";

        }
    });

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().ref('users/' + userId).set({
            username: name,
            email: email,
            profile_picture: imageUrl
        });
    }


    //FORM SUBMIT
    document.login.onsubmit = processLogin;


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
        onboardingPage.style.display = 'block'

        onboardingclose.addEventListener('click', function() {
            onboardingPage.style.display = 'none';
        });



        //insert name in menupage greeting



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
        chatPage.style.display = 'none';
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
    newmsgbtn.addEventListener('click', function() {
        newmsgPage.style.display = "block";
    });
    msgclose.addEventListener('click', function() { //close form
        newmsgPage.style.display = 'none';
    });

    newmsgSubmit.addEventListener('click', function() { //close form
        newmsgPage.style.display = 'none';

    });

    //show form for new pen pal
    newpalbtn.addEventListener('click', function() {
        newpalPage.style.display = "block";
    });

    palclose.addEventListener('click', function() { //close form
        newpalPage.style.display = 'none';
    });

    newpalSubmit.addEventListener('click', function() { //close form
        newpalPage.style.display = 'none';
    });









});
