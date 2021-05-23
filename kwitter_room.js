var firebaseConfig = {
      apiKey: "AIzaSyA7iaN4AxTyqkQO9yTZz_DkUwI4Oa0L-WU",
      authDomain: "kwitter-b05d3.firebaseapp.com",
      databaseURL: "https://kwitter-b05d3-default-rtdb.firebaseio.com",
      projectId: "kwitter-b05d3",
      storageBucket: "kwitter-b05d3.appspot.com",
      messagingSenderId: "248885973389",
      appId: "1:248885973389:web:542104c9c710c71e47adc4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  
  
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+"!";
function addroom(){
      roomname=document.getElementById("roomname").value;
      firebase.database().ref("/").child(roomname).update({
            purpose:"adding room name"
      });
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Roomnames = childKey;
      //Start code
           console.log("Room Name - "+Roomnames) ;
           row="<div class='roomname' id="+Roomnames+"onclick='redirecttoroomname(this.id)'>#"+Roomnames+"</div><hr>";
           document.getElementById("output").innerHTML+=row;
           });
      });
}
      //End code
     
getData();
function redirecttoroomname(name){
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="kwitter.html";
}
