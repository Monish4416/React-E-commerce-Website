import React, { createContext, useEffect, useState } from 'react'
import app from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // create user 
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // create User using Gmail 
    const signUpWithGmail = () => {
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }
    
    // Login 
    const login = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    // LogOut
    const logOut = () => {
        return signOut(auth)
    }

    // User is Avaliable or Not
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth,currentuser => {
            setUser(currentuser);
            setLoading(false);
        });
        return ()=> {
            return unsubscribe()
        }
    })

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        signUpWithGmail
    }

  return (
   <>
   <AuthContext.Provider value={authInfo}>
{children}
   </AuthContext.Provider>
   </>
  )
}

export default AuthProvider;