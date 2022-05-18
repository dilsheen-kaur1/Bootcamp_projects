import { useEffect, useState } from "react";
import {useContext} from 'react' 
import LanguageContext from './../Context'

function Input(){
    const [statee, setState] = useState(['']);
    const [currInput, setCurrInput] = useState('hellow world')
    const {counter, setCounter} = useContext(LanguageContext)


    // useEffect(()=>{
    //     setCurrInput('hellow world')
    // },[])
    const changedCounter = ()=>setCounter(12)
    const addTO =(e)=>{
        if(e.keyCode === 13){
        setState([...statee, e.target.value]);
        }
    }

    const currInputChange = (e)=>{
        setCurrInput(e.target.value)
    }
    return(
        <div>
            <input 
                type='text'
                value={currInput}
                onChange = {currInputChange}
                onKeyUp = {addTO}
            />
            {
                statee.map((el)=> <p>{el}</p>)
            }
            <button onClick={()=>setCounter((prev)=>prev+1)}>+</button>
            <h1>{counter}</h1>


        </div>
    )

}

export default Input;