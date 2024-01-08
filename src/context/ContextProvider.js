import React from 'react'
import { FirebaseContextProvider } from './FirebaseContext'
import { PostsContextProvider } from './PostsContext'
import { AuthContextProvider } from './AuthContext'

const ContextProvider = ({ children }) => {
    return (
        <FirebaseContextProvider>
            <AuthContextProvider>
                <PostsContextProvider>
                    {children}
                </PostsContextProvider>
            </AuthContextProvider>
        </FirebaseContextProvider>
    )
}

export default ContextProvider