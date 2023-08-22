import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDPgIh2eM2LnYPmb8qsS1G3vbSLFR2tDBg",
    authDomain: "ecommerce-b9398.firebaseapp.com",
    projectId: "ecommerce-b9398",
    storageBucket: "ecommerce-b9398.appspot.com",
    messagingSenderId: "921480349731",
    appId: "1:921480349731:web:18532d943a4133f183c996"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

