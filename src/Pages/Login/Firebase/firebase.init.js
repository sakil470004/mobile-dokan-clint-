import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyD28FW8xiD6dSU8smjmOR84dSKEe6ezsUU",
    authDomain: "mobile-dokan-8f630.firebaseapp.com",
    projectId: "mobile-dokan-8f630",
    storageBucket: "mobile-dokan-8f630.appspot.com",
    messagingSenderId: "1093529214400",
    appId: "1:1093529214400:web:120d1f53e4551b3de53c25"
  };
// Initialize Firebase
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initializeFirebase;

/*
steps for authentication
----------------
Step-1: Initial Setup
1. firebase: create project
2. create web app
3. get configuration
4. initialize firebase
5. Enable auth method
------------------
Step-2: setup component
1. Create Login Component
2. Create Register Component
3. Create Route for Login and Register
------------------------
Step 3: set auth system
1. set up sign in method
2. setup sign out method
3. user state
4. special observer
5. return necessary methods and states from useFirebase
---------------------
Step 4: create auth context hook (useAuth)
1. create a auth context
2. Create context Provider
3. set context Provider context value
4. use Auth Provider in the app.js
5. create useAuth Hook
---------------------
Step 5: create private route
1. create private Route
2. set private route
------------------
Step-6: Redirect after login
1. after login redirect user to their desired destination
*/