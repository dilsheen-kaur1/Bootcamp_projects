import {Navigate, useNavigate, Routes, Route} from 'react-router-dom'


//used if we wanna update something on server then redirect
function Post() {
    const status = 200;
    const navigate = useNavigate();
    const onclick = ()=>{
        console.log('hellow');
        navigate('/about')
    }
    if(status===404){
        return  <Navigate to='/notfound' />
    }
  return (
    <div>
        <h1>Post</h1>
        <button onClick={onclick}>Click</button>
        <Routes>
            <Route path='/show' element={<h1>Hey you</h1>}/>
        </Routes>
    </div>
  )
}

export default Post