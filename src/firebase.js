import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVs7gpPwFUeBH7Uckh7vTuvGU37KDYQd4",
    authDomain: "netflix-clone-5e3f0.firebaseapp.com",
    projectId: "netflix-clone-5e3f0",
    storageBucket: "netflix-clone-5e3f0.appspot.com",
    messagingSenderId: "987915562734",
    appId: "1:987915562734:web:669ddefe6e64ccd5668dff",
    measurementId: "G-T34ETKZKTB"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };