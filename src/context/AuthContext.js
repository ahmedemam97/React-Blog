import { createContext, useContext, useEffect, useRef, useState } from "react";
import { FirebaseContext } from "./FirebaseContext";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const { app } = useContext(FirebaseContext)
    const auth = getAuth(app)

    const signUp = async ({ email, password }) => {
        const creds = await createUserWithEmailAndPassword(auth, email, password)
        console.log(creds);
    }

    const signIn = async ({ email, password }) => {
        const creds = await signInWithEmailAndPassword(auth, email, password)
        console.log(creds);
    }

    const isMount = useRef(false)

    useEffect(() => {
        let unsubscribe = () => { };

        unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log('user', user);
            setUser(user)
        })

        return () => {
            unsubscribe()
        }

    }, [auth])

    const logout = async () => {
        await signOut(auth)
    }

    return <AuthContext.Provider value={{ signUp, signIn, user, isAuth: !!user, logout }}>
        {children}
    </AuthContext.Provider>
} 