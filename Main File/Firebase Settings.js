import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import getFirestore from "firebase/firestore";

alert("Start Connecting");

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "${{ secrets.firebaseApiKey }}",
  authDomain: "one1c-student.firebaseapp.com",
  projectId: "one1c-student",
  storageBucket: "one1c-student.appspot.com",
  messagingSenderId: "23302822964", // Confirm this in your Firebase console
  appId: "1:23302822964:web:04565a9f9d05ee694c7e61", // Confirm this in your Firebase console
  measurementId: "G-05F997X5J0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Get a reference to the SB collection
const sbCollection = collection(db, 'SB');

// Add a document to the SB collection
setDoc(doc(sbCollection, 'NB'), {
  description: "This is a description of the NB document."
})
.then(() => {
  console.log("Document written successfully!");
})
.catch(error => {
  console.error("Error writing document: ", error);
  alert("Error writing document. Please check the console for details.");
});

alert("Connection should be done. Please see console");
