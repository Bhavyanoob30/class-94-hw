//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyCqrHmH0XXVBc0scsAW2hnvi170ppmRgYE",
  authDomain: "kwitter1-829c1.firebaseapp.com",
  databaseURL: "https://kwitter1-829c1-default-rtdb.firebaseio.com",
  projectId: "kwitter1-829c1",
  storageBucket: "kwitter1-829c1.appspot.com",
  messagingSenderId: "504142029571",
  appId: "1:504142029571:web:4708a0e99f686b0b623f36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


    username= localStorage.getItem("User_name") ;
    document.getElementById("username").innerHTML = "Welcome " + username + "!" ;

    function add_room()
    {
      roomName = document.getElementById("room_name").value ;
      console.log(roomName) ;
      localStorage.setItem("roomname" , roomName) ;
      firebase.database().ref("/").child(roomName).update({

            purpose: "adding a room name"
      }) ;
      console.log("testing") ;
      window.location = "kwitter_page.html" ;
    }

