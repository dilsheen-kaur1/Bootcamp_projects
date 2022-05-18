import {useLocation, useNavigate} from 'react-router-dom'
import {getAuth, signInWithPopup, GoogeAuthProvider} from 'firebase/auth'
import {doc, setDoc, getDoc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {toast} from 'react-toastify'
import googleIcon from "../assets/svg/googleIcon.svg"

function OAuth() {
  return (
    <div>
        <h1>hey</h1>
    </div>
  )
}

export default OAuth