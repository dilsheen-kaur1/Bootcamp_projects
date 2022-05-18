import {useEffect, useState, useRef} from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
//onAuthStateChanged works on state change

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setcheckingStatus] = useState(true)//to check if logged in 
    const isMounted = useRef(true)
    useEffect(()=>{
        if(isMounted){
            const auth = getAuth()
            onAuthStateChanged(auth,(user)=>{
            if(user){
                setLoggedIn(true)
            }
            setcheckingStatus(false)
        })
        }
        return (()=>{
            isMounted.current = false
        },[isMounted])
        
    })
    return {loggedIn, checkingStatus}
}

