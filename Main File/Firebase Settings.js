import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

alert("Start Connecting");

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "${{ secrets.firebaseApiKey }}",
  authDomain: "one1c-student.firebaseapp.com",
  databaseURL: "https://one1c-student-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "one1c-student",
  storageBucket: "one1c-student.appspot.com",
  messagingSenderId: "23302822964",
  appId: "1:23302822964:web:04565a9f9d05ee694c7e61",
  measurementId: "G-05F997X5J0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = firebase.firestore();

// Get a reference to the SB collection
const sbCollection = db.collection('SB');

// Add a document to the SB collection
sbCollection.doc('NB').set({
  description: "This is a description of the NB document."
})
.then(() => {
  console.log("Document written successfully!");
})
.catch(error => {
  console.error("Error writing document: ", error);
});

alert("Connection should be done. Please see console");
