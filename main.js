$(document).ready(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyBp5DspYrDPqpYfowcSME3xxT8J7Q_1aZY",
        authDomain: "the-app-32a5d.firebaseapp.com",
        databaseURL: "https://the-app-32a5d.firebaseio.com",
        projectId: "the-app-32a5d",
        storageBucket: "",
        messagingSenderId: "577048184058",
        appId: "1:577048184058:web:a72302d03949f03e"
    };

    firebase.initializeApp(firebaseConfig);


    var database = firebase.database();


    $('#submit-btn').on('click', function(event){
        event.preventDefault();

        var name = $('#userName').val().trim();
        var email = $('#userEmail').val().trim();
        console.log(name)

        var newUser = {
            name: name, 
            email: email
        }

        database.ref().push(newUser)

        $('#userName').val('')
        $('#userEmail').val('')

        return false;
    })

})