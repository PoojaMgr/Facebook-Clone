import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCpn0WxakR2rTJ-faQ0jPBxh1sIK40X8JQ",
    authDomain: "facebook-clone-c3fca.firebaseapp.com",
    databaseURL: "https://facebook-clone-c3fca.firebaseio.com",
    projectId: "facebook-clone-c3fca",
    storageBucket: "facebook-clone-c3fca.appspot.com",
    messagingSenderId: "561135442764",
    appId: "1:561135442764:web:dfba42c7664342ec088de9",
    measurementId: "G-H6WSLW86TG"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;