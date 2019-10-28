var firebaseConfig = {
    apiKey: "AIzaSyDnw6YHbDG5k8CjryY9Go3R7fOgm02JPRo",
    authDomain: "test-project-df786.firebaseapp.com",
    databaseURL: "https://test-project-df786.firebaseio.com",
    projectId: "test-project-df786",
    storageBucket: "test-project-df786.appspot.com",
    messagingSenderId: "602971192011",
    appId: "1:602971192011:web:a4f399b1bcf822e84df94e"
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

});