import React from 'react'
import { FirebaseContextProvider } from './FirebaseContext'
import { PostsContextProvider } from './PostsContext'

const ContextProvider = ({children}) => {
    return (
        <FirebaseContextProvider>
            <PostsContextProvider>
                {children}
            </PostsContextProvider> 
        </FirebaseContextProvider>
    )
}

export default ContextProvider