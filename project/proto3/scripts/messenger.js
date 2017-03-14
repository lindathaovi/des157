// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    'use strict';

    // window.alert("Talk about your favorite holiday!")

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBdc14fdv04F8RRHqHxS3uwnDVkSlSyH2g",
        authDomain: "des157socialcue.firebaseapp.com",
        databaseURL: "https://des157socialcue.firebaseio.com",
        storageBucket: "des157socialcue.appspot.com",
        messagingSenderId: "75103703696"
    };
    firebase.initializeApp(config);



    //creating messenger prototype

    function messenger() {
        //calling elements by Id into variable
        this.messageList = document.getElementById('messages');
        this.messageForm = document.getElementById('message-form');
        this.messageInput = document.getElementById('message');
        this.submitButton = document.getElementById('submit');
        this.submitImageButton = document.getElementById('submitImage');
        this.userName = document.getElementById('user-name');
        this.signInButton = document.getElementById('sign-in');
        this.signOutButton = document.getElementById('sign-out');

        // Saves message on form submit.
        this.messageForm.addEventListener('submit', this.saveMessage.bind(this));
        this.signOutButton.addEventListener('click', this.signOut.bind(this));
        this.signInButton.addEventListener('click', this.signIn.bind(this));

        this.initFirebase();
    }

    messenger.prototype.initFirebase = function() {
        // Shortcuts to Firebase SDK features.
        this.auth = firebase.auth();
        this.database = firebase.database();
        this.storage = firebase.storage();
        // Initiates Firebase auth and listen to auth state changes.
        this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
    };

    // Loads chat messages history and listens for upcoming ones.
FriendlyChat.prototype.loadMessages = function() {
  // Reference to the /messages/ database path.
  this.messagesRef = this.database.ref('messages');
  // Make sure we remove all previous listeners.
  this.messagesRef.off();

  // Loads the last 12 messages and listen for new ones.
  var setMessage = function(data) {
    var val = data.val();
    this.displayMessage(data.key, val.name, val.text, val.photoUrl, val.imageUrl);
  }.bind(this);
  this.messagesRef.limitToLast(12).on('child_added', setMessage);
  this.messagesRef.limitToLast(12).on('child_changed', setMessage);
};

// Saves a new message on the Firebase DB.
FriendlyChat.prototype.saveMessage = function(e) {
  e.preventDefault();
  // Check that the user entered a message and is signed in.
  if (this.messageInput.value && this.checkSignedInWithMessage()) {
    var currentUser = this.auth.currentUser;
    // Add a new message entry to the Firebase Database.
    this.messagesRef.push({
      name: currentUser.displayName,
      text: this.messageInput.value,
    }).then(function() {
      // Clear message text field and SEND button state.
      FriendlyChat.resetMaterialTextfield(this.messageInput);
      this.toggleButton();
    }.bind(this)).catch(function(error) {
      console.error('Error writing new message to Firebase Database', error);
    });
  }
};


// Signin
FriendlyChat.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
};

// Signsout
FriendlyChat.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};








});
