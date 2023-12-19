import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDc-emw4dEmVpOMljfRK2xyb5ZV0485zak",
  authDomain: "typing-test-react-js.firebaseapp.com",
  projectId: "typing-test-react-js",
  storageBucket: "typing-test-react-js.appspot.com",
  messagingSenderId: "650296972039",
  appId: "1:650296972039:web:f7f770cdb8599ad441aba2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export default app;
