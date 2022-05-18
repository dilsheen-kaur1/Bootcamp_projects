import counterReducer from "./counter";
import loggedRecuder from "./isLogged";
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    //counter & isLogged can be named anything
    counter: counterReducer,
    isLogged: loggedRecuder
})

export default allReducers