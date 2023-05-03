import React, { createContext, useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)

// google auth provider
const googleProvider = new GoogleAuthProvider()
// Github auth provider
const githubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState('')


    // handler for sign-in with google
    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    // handler for sign-in with github
    const signInWithGithub = () =>{
        return signInWithPopup(auth, githubProvider);
    }
    

    const authInfo = {
        user,
        signInWithGoogle,
        signInWithGithub,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;