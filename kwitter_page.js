var firebaseConfig = {
       apiKey: "AIzaSyCjMtOqDG8asMpaiy8AdkIgZ1sEfqGaepY",
       authDomain: "kwitter-f0b94.firebaseapp.com",
       databaseURL: "https://kwitter-f0b94-default-rtdb.firebaseio.com/",
       projectId: "kwitter-f0b94",
       storageBucket: "kwitter-f0b94.appspot.com",
       messagingSenderId: "64624072692",
       appId: "1:64624072692:web:dc0cf7b4abb72fb99d0ba1"
     };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
 //Start code
 
 //End code
       } });  }); }
 getData();
 function send()
 {
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
             name:user_name,
             message:msg,
             like:0
       });
 }