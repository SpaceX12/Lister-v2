import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB3w1bp6yFt9K12tz87BTsTsg2oGAfF1aw",
    authDomain: "lists-8228c.firebaseapp.com",
    projectId: "lists-8228c",
    storageBucket: "lists-8228c.appspot.com",
    messagingSenderId: "867060671425",
    appId: "1:867060671425:web:d50bedf8d45ef5d2d74540"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();