import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyB1Eu1eJnj2vcnWPc2Osbi-vCno5CeDczI',
  authDomain: 'netflix-clone-react-proj-3e0be.firebaseapp.com',
  projectId: 'netflix-clone-react-proj-3e0be',
  storageBucket: 'netflix-clone-react-proj-3e0be.appspot.com',
  messagingSenderId: '770304307349',
  appId: '1:770304307349:web:819ca3a28446a9bdebeb9c',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
