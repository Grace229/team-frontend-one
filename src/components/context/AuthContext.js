import { createContext, useContext, useEffect, useState } from "react";
import {auth} from '../auth/firebase'
import { 
    createUserWithEmailAndPassword,
     signInWithEmailAndPassword, 
     signOut, 
     onAuthStateChanged,
     GoogleAuthProvider,
     signInWithPopup,
     FacebookAuthProvider
    //  signInWithRedirect
     } from 'firebase/auth'

const UserContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  
    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
   };

   const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
   }

   const googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
   }
   const facebookSignIn = () =>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
   }

const logout = () =>{
    return signOut(auth)
}
   useEffect(() => {
const isUser = onAuthStateChanged(auth, (currentUser) => {
console.log(currentUser)
    setUser(currentUser)
})
return () =>{
    isUser();
}
   }, [])
    return (
        <UserContext.Provider value={{ createUser, signIn, googleSignIn, facebookSignIn, user, logout }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}