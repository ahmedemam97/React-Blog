import { createContext } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../constants/firebaseConfig";
import { getFirestore } from 'firebase/firestore';

export const FirebaseContext = createContext();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export const FirebaseContextProvider = ({ children }) => {
    return (
        <FirebaseContext.Provider value={{ app, db }}>
            {children}
        </FirebaseContext.Provider>
    )
}