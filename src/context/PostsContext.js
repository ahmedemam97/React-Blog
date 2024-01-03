import { createContext, useCallback } from "react";
import useFetchCollection from "../hooks/useFetchCollection";

export const PostsContext = createContext()

export const PostsContextProvider = ({ children }) => {

    const { getData, data, loading, error } = useFetchCollection('Posts')

    const fetch = useCallback(() => {
        if (!data) {
            getData();
        }
    }, [data, getData])

    return <PostsContext.Provider value={{ fetch, data, loading, error }}>
        {children}
    </PostsContext.Provider>
}