import { useState } from 'react';
import initializeFirebase from '../Pages/Appointment/Login/firebase.init';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,   } from "firebase/auth";
import { useEffect } from 'react';


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({})
    // const [login , setLogin] =useState({});
    const auth = getAuth();

    /////// observe user state////////
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          return ()=> unsubscribe()
    },[])

    ////////logOut user////////
    const logout = ()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    ////////login User/////

    const loginUser = (email, password)=>{
      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }

    ///////create user////////

    const registerUser =(email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    }
    return{
        user,
        registerUser,
        loginUser,
        logout,

    }
};

export default useFirebase;