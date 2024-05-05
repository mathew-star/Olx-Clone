import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBwzCJpzCEZrnjYl5XIncDo1d0AOnIHPo0",
  authDomain: "olx-clone-eaf63.firebaseapp.com",
  projectId: "olx-clone-eaf63",
  storageBucket: "olx-clone-eaf63.appspot.com",
  messagingSenderId: "590227498187",
  appId: "1:590227498187:web:f20dc7cc4c09de8ff3e74e",
};

firebase.initializeApp(firebaseConfig);
export default firebase;


