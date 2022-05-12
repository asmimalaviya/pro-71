import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDui-gE62kyTKwLyAHcJUMx5XuEKv2YYM4",
    authDomain: "pro-71-412a2.firebaseapp.com",
    projectId: "pro-71-412a2",
    storageBucket: "pro-71-412a2.appspot.com",
    messagingSenderId: "102180524177",
    appId: "1:102180524177:web:ccf4fdd84da2952144af30"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
