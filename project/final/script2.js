// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//header
var header = document.getElementById("fixedLogo");
//pages
var loginPage = document.getElementById('login-page');
var menuPage = document.getElementById('menu-page');
var inboxPage = document.getElementById('inbox-page');
var chatPage = document.getElementById('chat-page')


//main menu buttons
var loginbtn = document.getElementById('loginbtn');
var messagebtn = document.getElementById('messagebtn');
var penpalbtn = document.getElementById('penpalbtn');
var friendsbtn = document.getElementById('friendsbtn');
var newsbtn = document.getElementById('newsbtn');
var settingsbtn = document.getElementById('settingsbtn');
//
var chatroombtn = document.getElementById('chatroombtn'); //from inbox to chatroom





//LOGIN SUBMIT
document.login.onsubmit = processLogin;

function processLogin() {
  var userName = document.login.userName.value;

//alert if no username is inserted
  // if(userName == ''){
  //   alert('Please enter a valid username');
  //
  //   return false;
  // }


//display menu page and hide login
  loginPage.style.display='none';
  menuPage.style.display='block';
  header.style.display='block';

//insert name in menupage greeting
  var greeting = document.getElementById('greeting');
  greeting.innerHTML= 'Good Evening, '+userName;

  return false; //prevent page from reloading

}

//display inbox
messagebtn.addEventListener('click', function(){

  menuPage.style.display = "none";
  inboxPage.style.display = "block";
  header.style.display='none';
});

//display chatroom
chatroombtn.addEventListener('click', function(){

  inboxPage.style.display = "none";
  chatPage.style.display = "block";
  header.style.display='none';
});
















});
