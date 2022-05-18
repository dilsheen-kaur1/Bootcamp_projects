import {useState, useEffect} from 'react'

function useFetch (url,options){
    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await fetch(url, options)
                const data = await response.json()
        
                setData(data)
                setLoading(false)
              }
              catch(error){
                  console.log(error);
                setError(error)
                setLoading(false)
              }
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return {data,loading,error}
}

export default useFetch