// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

window.alert("Talk about your favorite holiday!")

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBdc14fdv04F8RRHqHxS3uwnDVkSlSyH2g",
        authDomain: "des157socialcue.firebaseapp.com",
        databaseURL: "https://des157socialcue.firebaseio.com",
        storageBucket: "des157socialcue.appspot.com",
        messagingSenderId: "75103703696"
    };
    firebase.initializeApp(config);


//TEST

//Set a max limit of entries to 100
dataAddQuery = myDataRef.limit(100);

dataAddQuery.on('child_added', function(snapshot) {
    var message = snapshot.val();
    displayChatMessage(message.name, message.text);
});

//Adds a scrollbar when 26 messages have been written so that it stays within the container
dataRemoveQuery = myDataRef.endAt().limit(26);

dataRemoveQuery.on('child_removed', function(snapshot) {
    var message = snapshot.val();
    removeChatMessage(message.name, message.text);
});

document.getElementById("messageInput").addEventListener("keypress",(function (e) {

    //When ENTER is pressed
    if (e.keyCode == 13) {
        var name = document.getElementById('nameInput').value;

        if (name.length > 18) {
            alert('Please enter a shorter name'); //The alert is temporary
        }
        else {
            var text = document.getElementById('messageInput').value;

            if (text.length > 450) {
                alert('Your message is too long'); //The alert is temporary
            }
            else {
                myDataRef.push({name: name, text: text});
                document.getElementById('messageInput').value = "";
            }
        }
    }
}))

function displayChatMessage(name, text) {

  var newMessage = document.createElement("div");
  newMessage.innerHTML = "<b>" + name + "</b> : " + text;
  document.getElementById("messagesDiv").appendChild(newMessage);
}

function removeChatMessage(name, text) {
  document.getElementById("messagesDiv").removeChild(document.getElementById("messagesDiv").firstChild)

}


































});
