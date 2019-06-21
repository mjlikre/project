$(document).ready(function(){
    // firebase SDK, connecting the js file to firebase
    var firebaseConfig = {
        apiKey: "AIzaSyBp5DspYrDPqpYfowcSME3xxT8J7Q_1aZY",
        authDomain: "the-app-32a5d.firebaseapp.com",
        databaseURL: "https://the-app-32a5d.firebaseio.com",
        projectId: "the-app-32a5d",
        storageBucket: "",
        messagingSenderId: "577048184058",
        appId: "1:577048184058:web:a72302d03949f03e"
    };
    // initialize firebase configuration

    firebase.initializeApp(firebaseConfig);


    var database = firebase.database();

    // grabs the submit button click action, once clicked it will grab the data entered
    // inside each input box
    $('#submit-btn').on('click', function(event){
        event.preventDefault();

        // grabs the values from the input boxes and assigning the value to the two following variable

        var name = $('#userName').val().trim();
        var email = $('#userEmail').val().trim();
        console.log(name)
        // initialize an object, entering the names and email that we got from the user input as values for it's keys


        var newUser = {
            name: name, 
            email: email
        }

        // pushing this data to firebase in order to save the data

        database.ref().push(newUser)

        // clearing the input boxes

        $('#userName').val('')
        $('#userEmail').val('')

        return false;
    })

})