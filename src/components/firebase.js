import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = { 
    apiKey: "AIzaSyA-83gVHWMC5saj3lZfWG-wz596JD8DKZQ",
    authDomain: "chatapp-44819.firebaseapp.com",
    projectId: "chatapp-44819",
    storageBucket: "chatapp-44819.appspot.com",
    messagingSenderId: "714943974155",
    appId: "1:714943974155:web:21f91d1a59f60f728c700e",
    measurementId: "G-R4NSZ8LCES"
};
  
//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default firebaseConfig;