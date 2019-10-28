var firebaseConfig = {
    apiKey: "AIzaSyCg0izlNPPwhzL9W40oyKP9bduiTE9qUow",
    authDomain: "train-time-bf7e1.firebaseapp.com",
    databaseURL: "https://train-time-bf7e1.firebaseio.com",
    projectId: "train-time-bf7e1",
    storageBucket: "train-time-bf7e1.appspot.com",
    messagingSenderId: "606372764875",
    appId: "1:606372764875:web:b7027904207ee82bf8cf4e"
  };
firebase.initializeApp(firebaseConfig);
var database = firebase.database()

$("#submit").on("click", function(event) {
    event.preventDefault();
    let trainName = $("#trainName").val().trim();
    let destination = $("#destination").val().trim();
    let trainTime = $("#trainTime").val().trim();
    let frequency = $("#frequency").val().trim();
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(frequency);

    $("#trainName").val("");
    $("#destination").val("");
    $("#trainTime").val("");
    $("#frequency").val("");

    database.ref().push({
        TrainName: trainName,
        Destination: destination,
        TrainTime: trainTime,
        Frequency: frequency,
    })
});

database.ref().on("child_added", function(snapshot) {
    trainName = snapshot.child("TrainName").val();
    destination = snapshot.child("Destination").val();
    trainTime = snapshot.child("TrainTime").val();
    frequency = snapshot.child("Frequency").val();
})