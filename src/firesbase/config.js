import firebase from 'firebase';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyBqNS3TRjO7J9jgQNCFWOAi1z3Mqdidkc8',
  authDomain: 'toolkit-news-monster.firebaseapp.com',
  databaseURL: 'https://toolkit-news-monster.firebaseio.com',
  projectId: 'toolkit-news-monster',
  storageBucket: 'toolkit-news-monster.appspot.com',
  messagingSenderId: '589197355671',
  appId: '1:589197355671:web:f3ecbc298ced40027657d2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
export { firestore, auth };
