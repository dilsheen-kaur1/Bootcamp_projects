import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import allReducers from './reducers';
import { Provider } from 'react-redux';
//connects global state to app

//store -> globalized store

//action increment (action call)
// const increment = ()=>{
//   return {
//     type: 'INCREMENT'
//   }
// }
// const decrement = ()=>{
//   return {
//     type: 'DECREMENT'
//   }
// }

//reducer (state return)
// const counter = (state = 0, action)=>{
//   switch(action.type){
//     case "INCREMENT":
//       return state + 1
//     case "DECREMENT":
//       return state - 1
//   }
// }

// let store = createStore(counter)

//display in console
//store.subscribe(()=> console.log(store.getState()))

//dispatch
// store.dispatch(increment())


//we cannot pass more than 1 reducers here, we'll have to combine them
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

