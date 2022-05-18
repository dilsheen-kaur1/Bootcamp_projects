import {createContext, useState} from 'react'
import axios from 'axios'
const NewContext = createContext();

export const FetchApiProvider = ({children})=>{
    const [ counter,setCounter] = useState(1)
    const [data, setData] = useState({})
    // const fetchApiCall = async () =>{
    //     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     const responseData = await response.json()
    //     setData(responseData)
    // }

    const axiosCall = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/todos/1'
    })

    const apiDataCall = async()=>{
        const response = await axiosCall.get()
        console.log(response);
        setData(response)
    }
    
    return(
        <NewContext.Provider value={
            {apiDataCall,
            data,
            counter}
        }>
            {children}
        </NewContext.Provider>
    )
    
}

export default NewContext