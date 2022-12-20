const firebaseConfig = {
  apiKey: "AIzaSyCG7Dl5QyprLs0L2kVFogFvbEN-BB2DB5g",
  authDomain: "choicamp.firebaseapp.com",
  databaseURL: "https://choicamp-default-rtdb.firebaseio.com",
  projectId: "choicamp",
  storageBucket: "choicamp.appspot.com",
  messagingSenderId: "1083629064814",
  appId: "1:1083629064814:web:1436cb7c55c16831bacc7f",
  measurementId: "G-0SVDJXC6RL"
};

firebase.initializeApp(firebaseConfig);
database = firebase.database();


function sendMsg(){
    let date = new Date();
    let msg = $("#message").val();
    database.ref("msgs/"+date.getTime()).set(msg);
    $("#message").val("");
}

function loadMsgs(){
    database.ref("msgs").on("value", callback);
    function callback(snapshot){
        $("#chatlist").html("");
        console.log(snapshot);
        snapshot.forEach(function(child){
             $("#chatlist").append("<div>"+child.val()+"</div>");
        });
        $("#chatlist").scrollTop(15000);
    }
}
