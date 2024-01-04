import { createContext, useCallback } from "react";
import useFetchCollection from "../hooks/useFetchCollection";

export const PostsContext = createContext()

export const PostsContextProvider = ({ children }) => {

    const { getData, data, loading, error, fetching, lastDoc, getNextData } = useFetchCollection('Posts')

    const fetch = useCallback(() => {
        if (!data) {
            getData();
        }
    }, [data, getData])

    const fetchNext = useCallback(() => {
        if (data && !loading && !fetching && lastDoc) {
            console.log('dddd');
            getNextData(lastDoc);
        }
    }, [data, getNextData, loading, fetching, lastDoc])

    const reFetch = getData

    return <PostsContext.Provider value={{ fetch, data, loading, error, fetchNext, fetching, reFetch }}>
        {children}
    </PostsContext.Provider>
}