import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFFFgDhh_AS2xMeeSZM7iRcvOGtVv6S34",
    authDomain: "kidflix-23a23.firebaseapp.com",
    projectId: "kidflix-23a23",
    storageBucket: "kidflix-23a23.appspot.com",
    messagingSenderId: "376208995603",
    appId: "1:376208995603:web:4720d5245270b870c8d6e6",
    measurementId: "G-VYW5EHX7TE"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Get the Auth object

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

 
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then(function(userCredential) {
            // Signed up successfully
            var user = userCredential.user;
            console.log('User signed up:', user);
            // Show success message to the user
           console.log(alert('User created successfully!'));
        })
        .catch(function(error) {
            // Handle errors
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error('Sign-up error:', errorCode, errorMessage);
            // Show error message to the user
            alert(errorMessage);
        });
});

// Redirect button functionality
document.getElementById('redirect-button').addEventListener('click', function() {
    // Redirect to home page
    window.location.href = 'index.html';
});


