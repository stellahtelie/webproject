import * as firebase from "firebase/app"
import "firebase/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDEwaWGVPzvlk_-g0Auo6OL0W08RS9f1dc",
    authDomain: "stellah-d1cc2.firebaseapp.com",
    projectId: "stellah-d1cc2",
    storageBucket: "stellah-d1cc2.appspot.com",
    messagingSenderId: "237203604331",
    appId: "1:237203604331:web:fb3c5f63fcd952175bc22e",
    measurementId: "G-H6DWHTF2PN"
  };
  const app=firebase.initializeApp(firebaseConfig)
  const db=app.firestore()
  export {app,db}