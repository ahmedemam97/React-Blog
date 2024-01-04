import { useCallback, useContext, useState } from 'react'
import { FirebaseContext } from '../context/FirebaseContext';
import { collection, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';

const useFetchCollection = (collectionName) => {
    const { db } = useContext(FirebaseContext);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState('')

    const getData = useCallback(async () => {
        setLoading(true)
        try {
            const colRef = collection(db, collectionName);
            const q = query(colRef, orderBy('createdAt', 'desc'), limit(8));
            const res = await getDocs(q)
            
            const resData = res.docs.map((doc) => {
                const docData = doc.data();
                return {
                    id: doc.id,
                    ...docData,
                    createdAt: docData.createdAt.toDate()
                }
            })
            setData(resData)
            console.log(resData);

        } catch (error) {
            setError(error.message)
        }

        setLoading(false)
    }, [])

    return {data, loading, error, getData}
}
export default useFetchCollection