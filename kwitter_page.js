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
  roomname=localStorage.getItem("roomname");
  function send(){
        msg=document.getElementById("msg").value;
        firebase.database().ref(roomname).push({
              name:username,
              message:msg,
            like:0
        });
        document.getElementById("msg").value="";
        
       
  }
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log( firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4> "+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=namewithtag+messagewithtag+likebutton+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on the likebutton - "+message_id);
      buttonid=message_id;
      likes=document.getElementById(buttonid).value;
      updatedlikes=Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(roomname).child(message_id).update({
            like :updatedlikes
      });
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location.replace("kwitter.html");
}