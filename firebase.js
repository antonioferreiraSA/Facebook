import 'firebase/storage';

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDApVnUhXhLFWphfX7JkoKNIcJ7UIlsoc4",
  authDomain: "facebook-1d891.firebaseapp.com",
  projectId: "facebook-1d891",
  storageBucket: "facebook-1d891.appspot.com",
  messagingSenderId: "862232510044",
  appId: "1:862232510044:web:12d89ad9f4e7d1d4513099"
};

const app = !firebase.apps.length
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage};
