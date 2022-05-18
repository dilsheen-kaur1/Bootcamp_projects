import { useEffect, useState } from "react"

function Test(){
    const [number,setNUmber] = useState(1);
    useEffect(()=>{
        setInterval(()=>{
            setNUmber((prev)=>prev+1)
        },1000)
    },[])
    

    return (
        <>
            <h1>{number}</h1>
        </>
    )
    
}
export default Test