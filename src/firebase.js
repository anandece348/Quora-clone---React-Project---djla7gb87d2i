import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// -----------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyDv8Pd1kxXS87OBt3abara1cJfFvtG2xHM", // AIzaSyA1aRfCxgclV8NqWfw-yFYlk7f3kpRDZoo // AIzaSyDv8Pd1kxXS87OBt3abara1cJfFvtG2xHM
    authDomain: "quora-clone-14366.firebaseapp.com", // quora-clone-2e62a.firebaseapp.com // quora-clone-14366.firebaseapp.com
    projectId: "quora-clone-14366", // quora-clone-2e62a // quora-clone-14366
    storageBucket: "quora-clone-14366.appspot.com", // quora-clone-2e62a.web.app // quora-clone-2e62a.appspot.com
    messagingSenderId: "612555366690", // 395459560551 // 612555366690
    appId: "1:612555366690:web:f33a2ccba3cb331e63057b",
    measurementId: "G-JYD82BCE34"
  };
  // gs://quora-clone-2e62a.appspot.com
  // -----------------------------------------------------------------
  // https://quora-clone-2e62a-default-rtdb.firebaseio.com/
  // const firebaseConfig = {
  //   apiKey: "AIzaSyA1aRfCxgclV8NqWfw-yFYlk7f3kpRDZoo",
  //   authDomain: "quora-clone-2e62a.firebaseapp.com",
  //   projectId: "quora-clone-2e62a",
  //   storageBucket: "quora-clone-2e62a.appspot.com",
  //   messagingSenderId: "395459560551",
  //   appId: "1:395459560551:web:558d8fd0b4f526e7a500c2",
  //   measurementId: "G-YRMXFF5KKW"
  // };
//   const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const auth =firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  const db = firebaseApp.firestore();

  export{auth, provider};
  export default db;
