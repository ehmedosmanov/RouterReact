import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url) => {
 const [data, setData] = useState(null)
 const [loading, setLoading] = useState(false)
 const [error, setError] = useState(null)

 const fetchData = async () => {
    setLoading(true)
    try {
        const response = await axios.get(url)
        setLoading(false)
        setData(response.data)
        setError(null)
    } catch (error) {
        setError(error)
        setLoading(false)

    }
 }

 useEffect(() => {
    fetchData()
 }, [url])
 return {data, loading, error}
}

export default useFetch