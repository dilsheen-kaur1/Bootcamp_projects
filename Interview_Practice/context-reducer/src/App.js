import {useState} from 'react'
import Input from './components/Input'
import {FetchApiProvider} from './Context'

function App() {
  const [title,setTitle]=useState('heelo')
  return (
    <FetchApiProvider>
      <div>
        <Input/>
      </div>
    </FetchApiProvider>
  );
}

export default App;
