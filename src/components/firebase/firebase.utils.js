import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyByxa9owz-qUzIZs-XrTK97vI-ijsLyKGY",
    authDomain: "crwn-db-7e795.firebaseapp.com",
    databaseURL: "https://crwn-db-7e795.firebaseio.com",
    projectId: "crwn-db-7e795",
    storageBucket: "crwn-db-7e795.appspot.com",
    messagingSenderId: "823285553191",
    appId: "1:823285553191:web:01ab4593fa54a64ec4d602",
    measurementId: "G-D6HB1LHC1L"
  };

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;