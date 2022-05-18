import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement} from './Actions'
// import counterReducer from './Reducer'

function App() {
  const action = useSelector(state => state.counter)
  console.log(action + 'action');
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick = {()=>dispatch(increment())}>+</button>
      <h1>hello</h1>
      <h1>{action}</h1>
      <button onClick = {()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
 