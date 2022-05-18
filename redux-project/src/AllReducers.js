import counterReducer from './Reducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    //counter & isLogged can be named anything
    counter: counterReducer,
})

export default allReducers