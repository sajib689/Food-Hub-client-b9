import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.init";
import axios from "axios";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const gitHubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const google = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const gitHub = () => {
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect( () => {
      const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        const userEmail = currentUser?.email || user?.email
        const loggedUser = {email: userEmail}
        setUser(currentUser)
        setLoading(false)
        if(currentUser){
            axios.post('https://assignment-eleven-servertwo.vercel.app/jwt',loggedUser,{
                withCredentials: true,
            })
            .then(res => {
                console.log(res.data);
            })
        } else {
            axios.post('https://assignment-eleven-servertwo.vercel.app/logout',loggedUser,{
                withCredentials: true
            })
            .then(res => {
                console.log(res.data);
            })
        }
          
        })
        return () => {
            unsubscribe()
        }
    },[user?.email])
    const authInfo = {
        user,
        loading,
        login,
        register,
        google,
        gitHub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;