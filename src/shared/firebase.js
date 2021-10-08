//firebase.js
import firebase from "firebase/app";
import "firebase/firestore"; //파이어베이스 데이터 가져오기위해 연결하기

const firebaseConfig = {
  apiKey: "AIzaSyBDYDHHrmK5bJ29RFoJJDTi-YNIgUGpjjQ",
  authDomain: "full-calen.firebaseapp.com",
  projectId: "full-calen",
  storageBucket: "full-calen.appspot.com",
  messagingSenderId: "491961095197",
  appId: "1:491961095197:web:a986eaa830114e872be2f4",
  measurementId: "G-3H2QBFW5LK",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const firestore = firebase.firestore();

export { apiKey, firestore };
