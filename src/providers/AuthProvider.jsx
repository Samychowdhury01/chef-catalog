import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// google auth provider
const googleProvider = new GoogleAuthProvider();
// Github auth provider
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // handler for sign-in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // handler for sign-in with github
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // create new user using email password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile=(name,photoUrl)=>{
    return updateProfile(auth.currentUser,{
        displayName:name,
        photoURL:photoUrl
    })
}

  // sign-out user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    updateUserProfile,
    signInWithGoogle,
    signInWithGithub,
    createUser,
    loginWithEmail,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
