import { useEffect, useState } from "react"

function useFetchData(url){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            fetch(url)
            .then((response) => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    return { data, loading, error }
}

export default useFetchData