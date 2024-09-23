// Import Firebase modules
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js';

// Initialize Firebase
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
const database = getDatabase(app);

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form submission

            // Get form values
            const name = contactForm.elements['name'].value;
            const email = contactForm.elements['email'].value;
            const subject = contactForm.elements['subject'].value;
            const message = contactForm.elements['message'].value;

            // Create data object
            const formData = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };

            // Push data to Firebase Realtime Database
            push(ref(database, 'contactForms'), formData)
                .then(() => {
                    console.log('Data added to Firebase database successfully.');
                    // Clear form fields if needed
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('Error adding data to Firebase database:', error);
                });
        });
    } else {
        console.error("Contact form element not found.");
    }
});
