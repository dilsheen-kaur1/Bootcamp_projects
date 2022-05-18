import PropTypes from 'prop-types'  
import {useEffect,useContext} from 'react'
import NewContext from './../Context'

function Input({title}) {
    const {data, apiDataCall, counter} = useContext(NewContext)
    useEffect(() => {
        apiDataCall()
    }, [])
    
  return (
    <div>
        <h1>{counter}</h1>
        <div>{data.data.title}</div>
    </div>
    
  )
}

// Input.defaultProps = {
//     title:'world'
// }

Input.propTypes = {
    title:PropTypes.string.isRequired
}

export default Input