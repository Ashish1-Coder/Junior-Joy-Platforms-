


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyBFFFgDhh_AS2xMeeSZM7iRcvOGtVv6S34",
    authDomain: "kidflix-23a23.firebaseapp.com",
    projectId: "kidflix-23a23",
    storageBucket: "kidflix-23a23.appspot.com",
    messagingSenderId: "376208995603",
    appId: "1:376208995603:web:4720d5245270b870c8d6e6",
    measurementId: "G-VYW5EHX7TE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);


document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signin-form');

    if (signInForm) {
        signInForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission

            const email = signInForm['email'].value;
            const password = signInForm['password'].value;

            // Sign in with email and password
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in successfully
                    const user = userCredential.user;
                    console.log('User signed in successfully:', user);

                    const signInData = {
                        email: user.email,
                        signInTime: new Date().toString()
                    };

                    // Push sign-in data to the database
                    push(ref(database, 'sign-ins'), signInData)
                        .then(() => {
                            console.log('Sign-in data added to the database.');
                            // Redirect to home page after successful sign-in
                            window.location.href = '/index.html';
                        })
                        .catch((error,userpassword ) => {
                            console.error('Error adding sign-in data to the database:', error);
                        });
                })
                .catch(() => {
                    // Handle errors
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    // console.error('Sign in error:', errorCode, errorMessage);
                    // Show error message in an alert
                    alert(' User Password Incorrect.....');
                });
                
        });
    } else {
        // console.error("Sign-in data not found.");
       alert('user');
        
    }
});
