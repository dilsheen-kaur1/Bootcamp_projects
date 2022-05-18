import{useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions/index'

function App() {
  //to use all the data from store
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      {isLogged ? '': <h3>Hello wordl</h3>}
    </div>
  );
}

export default App;
