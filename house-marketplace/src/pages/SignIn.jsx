import {useState} from 'react'
import { toast } from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import {ReactComponent as ArrowRightIcon} from "../assets/svg/keyboardArrowRightIcon.svg"
import visibilityIcon from "../assets/svg/visibilityIcon.svg"
import { async } from '@firebase/util'
import OAuth from '../components/OAuth'

function SignIn() {
  //for showing password
  const [showPassword, setShowPassword] = useState(false)
  //mainttainig single state for email and password
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  //access email & password using destructoring
  const{email, password} = formData

  const navigate = useNavigate()
  const onChange = (e)=>{
    setFormData((prevState)=> ({
      ...prevState,
      [e.target.id]: e.target.value //this can update state of email & password both using id
    }))

  }

  const onSubmit = async(e)=>{
    e.preventDefault()
    try{
      const auth = getAuth()
      //next line returns a promise
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate('/')
      }
    }
    catch(error){
      toast.error('Bad User Credentials')
    }
    
  }
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>

        <form onSubmit={onSubmit}>
          <input 
            type='email' 
            className='emailInput'
            placeholder='Email'
            id='email'
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input 
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              id='password'
              value={password}
              onChange={onChange}
            />
            <img 
              src={visibilityIcon}
              alt='show password'
              className='showPassword'
              onClick={()=> setShowPassword((prevState)=> !prevState)}
            />
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signInBar'>
            <p className='signInText'>Sign In</p>
            <button className='signInButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>

        <OAuth />
        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </>
  )
}

export default SignIn