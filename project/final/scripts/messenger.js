// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    window.alert("Hello There! Welcome to SocialCue. Thank you for testing out this app! Some features are still being worked out including the messenger!");

    'use strict';

    //
    // // Initialize Firebase
    // var config = {
    //     apiKey: "AIzaSyBdc14fdv04F8RRHqHxS3uwnDVkSlSyH2g",
    //     authDomain: "des157socialcue.firebaseapp.com",
    //     databaseURL: "https://des157socialcue.firebaseio.com",
    //     storageBucket: "des157socialcue.appspot.com",
    //     messagingSenderId: "75103703696"
    // };
    // firebase.initializeApp(config);



    //creating messenger prototype

    function messenger() {
      this.checkSetup();
        //calling elements by Id into variables
        this.messageList = document.getElementById('messages');
        this.messageForm = document.getElementById('message-form');
        this.messageInput = document.getElementById('message');
        this.submitButton = document.getElementById('submit');
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
messenger.prototype.loadMessages = function() {
  // Reference to the /messages/ database path.
  this.messagesRef = this.database.ref('messages');
  // Make sure we remove all previous listeners.
  this.messagesRef.off();

  // Loads the last 12 messages and listen for new ones.
  var setMessage = function(data) {
    var val = data.val();
    this.displayMessage(data.key, val.name, val.text,);
  }.bind(this);
  this.messagesRef.limitToLast(12).on('child_added', setMessage);
  this.messagesRef.limitToLast(12).on('child_changed', setMessage);
};

// Saves a new message on the Firebase DB.
messenger.prototype.saveMessage = function(e) {
  e.preventDefault();
  // Check that the user entered a message and is signed in.
  // if (this.messageInput.value && this.checkSignedInWithMessage()) {

  //edit: if there is a value in text input NOT checking signin
  if (this.messageInput.value) {
    var currentUser = this.auth.currentUser;
    // Add a new message entry to the Firebase Database.
    this.messagesRef.push({
      name: currentUser.displayName,
      text: this.messageInput.value,
    }).then(function() {
      // Clear message text field and SEND button state.
      messenger.resetMaterialTextfield(this.messageInput);
      this.toggleButton();
    }.bind(this)).catch(function(error) {
      console.error('Error writing new message to Firebase Database', error);
    });
  }
};


// Signin
messenger.prototype.signIn = function() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.signInWithPopup(provider);
  signInSuccessUrl: '.../index.html'
};

// Signsout
messenger.prototype.signOut = function() {
  // Sign out of Firebase.
  this.auth.signOut();
};

messenger.prototype.onAuthStateChanged = function(user) {
  if (user) { // User is signed in!
    // Get profile pic and user's name from the Firebase user object.
    var userName = user.displayName;

    // Set the user's  name.
    this.userName.textContent = userName;


    // We load currently existing chant messages.
    this.loadMessages();

    // We save the Firebase Messaging Device token and enable notifications.
    this.saveMessagingDeviceToken();
  } else { // User is signed out!
    // Hide user's profile and sign-out button.
    this.userName.setAttribute('hidden', 'true');
    this.userPic.setAttribute('hidden', 'true');
    this.signOutButton.setAttribute('hidden', 'true');

    // Show sign-in button.
    this.signInButton.removeAttribute('hidden');
  }
};

// Saves the messaging device token to the datastore.
messenger.prototype.saveMessagingDeviceToken = function() {
  firebase.messaging().getToken().then(function(currentToken) {
    if (currentToken) {
      console.log('Got FCM device token:', currentToken);
      // Saving the Device Token to the datastore.
      firebase.database().ref('/fcmTokens').child(currentToken)
          .set(firebase.auth().currentUser.uid);
    } else {
      // Need to request permissions to show notifications.
      this.requestNotificationsPermissions();
    }
  }.bind(this)).catch(function(error){
    console.error('Unable to get messaging token.', error);
  });
};


// Resets the given MaterialTextField.
messenger.resetMaterialTextfield = function(element) {
  element.value = '';
  element.parentNode.MaterialTextfield.boundUpdateClassesHandler();
};

messenger.MESSAGE_TEMPLATE =
    '<div class="message-container">' +
      '<div class="spacing"><div class="pic"></div></div>' +
      '<div class="message"></div>' +
      '<div class="name"></div>' +
    '</div>';

    messenger.prototype.displayMessage = function(key, name, text) {
  var div = document.getElementById(key);
  // If an element for that message does not exists yet we create it.
  if (!div) {
    var container = document.createElement('div');
    container.innerHTML = messenger.MESSAGE_TEMPLATE;
    div = container.firstChild;
    div.setAttribute('id', key);
    this.messageList.appendChild(div);
  }

  div.querySelector('.name').textContent = name;
  var messageElement = div.querySelector('.message');
  if (text) { // If the message is text.
    messageElement.textContent = text;
    // Replace all line breaks by <br>.
    messageElement.innerHTML = messageElement.innerHTML.replace(/\n/g, '<br>');
  }
  // Show the card fading-in and scroll to view the new message.

  this.messageList.scrollTop = this.messageList.scrollHeight;
  this.messageInput.focus();
};

// Enables or disables the submit button depending on the values of the input
// fields.
FriendlyChat.prototype.toggleButton = function() {
  if (this.messageInput.value) {
    this.submitButton.removeAttribute('disabled');
  } else {
    this.submitButton.setAttribute('disabled', 'true');
  }
};



window.onload = function() {
  window.messenger = new messenger();
};



























});
