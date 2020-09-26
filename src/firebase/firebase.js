import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: "AIzaSyBW9rZ0nWKCFy_5MFS679TlRiySMkjmK6s",
  authDomain: "image-uploader-69b55.firebaseapp.com",
  databaseURL: "https://image-uploader-69b55.firebaseio.com",
  projectId: "image-uploader-69b55",
  storageBucket: "image-uploader-69b55.appspot.com",
  messagingSenderId: "585297284102",
  appId: "1:585297284102:web:c711853d593595ccadc787"
};

firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
export default firebase;