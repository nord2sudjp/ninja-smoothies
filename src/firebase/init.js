import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAcG8ykxio_n4-DM3vws1N_BLLf7HyOh_Q",
    authDomain: "ninja-smoothies-1a243.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-1a243.firebaseio.com",
    projectId: "ninja-smoothies-1a243",
    storageBucket: "ninja-smoothies-1a243.appspot.com",
    messagingSenderId: "203255685724",
    appId: "1:203255685724:web:69d06cc93cf073af"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export
export default firebaseApp.firestore()