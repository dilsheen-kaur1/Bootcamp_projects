// import Input from './components/Input'
// import {BrowserRouter as Routes, Route, Router} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// import About from './components/About';
// import Home from './components/Home';
// import {NewProvider} from './Context';
import Input from './components/Input';
import { useState } from 'react';
import LanguageContext from './Context';
function App() {
  const [counter, setCounter] = useState(3)
  // const value = {counter, setCounter}
  // return (
  //   // <NewProvider>
  //   // <Router>
  //     <div className="App"> 
  //        <Input  />
  //       {/* <Routes>
  //         <Route path='/' element={<Input />}/>
  //         <Route path='/about' element={<About />}/>
  //       </Routes> */}
  //     </div>
  //   /* </Router>
  //   </NewProvider> */
  // );

  return(
    <LanguageContext.Provider value={{counter,setCounter}}> 
        <Input />
    </LanguageContext.Provider>
)
}

export default App;
