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
    let trainName = snapshot.child("TrainName").val();
    let destination = snapshot.child("Destination").val();
    let trainTime = snapshot.child("TrainTime").val();
    let frequency = snapshot.child("Frequency").val();
    // nextArrival = 


    let newTrain = $(`<tr>
                                <td>${trainName}</td>
                                <td>${destination}</td>
                                <td>${frequency}</td>
                                <td>"hi"</td>
                                <td>"hello"</td>
                                </tr>`);

         $(".newRow").append(newTrain);
});