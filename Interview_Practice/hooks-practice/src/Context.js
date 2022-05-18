import reducer from './Reducer'
import {useReducer} from 'react'

const initialState = {
    count:0,
    users:[],
    loading: false
    
}

function Context (){
    const[state,dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <h1>Count: {state.count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT", payload:'plus' })}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT", payload:'minus' })}>-</button>
        </>
    )
}

export default Context
