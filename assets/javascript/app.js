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

    if (trainName === "" || destination === "" || trainTime === "" || frequency === "") {
        alert("Please fill out the entire form.");
        return false;
    } else if (typeof(trainName !== "string") || typeof(destination !== "string") || typeof(trainTime !== "integer" || typeof(frequency !== "integer"))) {
        alert("Please fill the form out properly"); 
        return false;
    } else {

    $("#trainName").val("");
    $("#destination").val("");
    $("#trainTime").val("");
    $("#frequency").val("");

    database.ref().push({
        TrainName: trainName,
        Destination: destination,
        TrainTime: trainTime,
        Frequency: frequency
    })
}
});
database.ref().on("child_added", function(snapshot) {
    let trainName = snapshot.child("TrainName").val();
    let destination = snapshot.child("Destination").val();
    let trainTime = snapshot.child("TrainTime").val();
    let frequency = snapshot.child("Frequency").val();

    let trainTimeConverted = moment(trainTime, "HH:mm").subtract(1, "years");

    let diffTime = moment().diff(moment(trainTimeConverted), "minutes");

    let tRemainder = diffTime % frequency;

    let minAway = frequency - tRemainder;
    console.log(minAway);

    let nextArrival = moment().add(minAway, "minutes").format("HH:mm");
    console.log(nextArrival);

    let newTrain = $(`<tr>
                                <td>${trainName}</td>
                                <td>${destination}</td>
                                <td>${frequency}</td>
                                <td>${nextArrival}</td>
                                <td>${minAway}</td>
                                </tr>`);

         $(".newRow").append(newTrain);
});