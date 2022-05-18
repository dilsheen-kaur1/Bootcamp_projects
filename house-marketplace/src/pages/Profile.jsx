import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {getAuth, updateProfile} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import { async } from '@firebase/util'

function Profile() {
  const navigate = useNavigate()
  const auth = getAuth()
  const [changeDetails, setChangeDetails] = useState(false)
  const [formData,setFormData] = useState({
    name: auth.currentUser.displayName,
    email:auth.currentUser.email
  })
  const {name, email} = formData

  const onLogout =()=>{
    auth.signOut()
    navigate('/sign-in')
  }

  const onSubmit = async()=>{
    try{
      if(auth.currentUser.displayName !==name){
        //update name in db
        await updateProfile(auth.currentUser,{
          displayName: name
        })

        //update in firestore
        const userRef = doc(db, 'users',auth.currentUser.uid)
        await updateDoc(userRef,{
          name
        })

      }
    }
    catch(error){
      toast.error('could not update profile details')
    }
  }

  const onChange = (e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }

  // useEffect(()=>{
  //   setUser(auth.currentUser);
  // },[])
  // return user ? <h1>{user.displayName}</h1> : 'Not logged In'
  return <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">My Profile</p>
      <button type='button' className="logOut" onClick={onLogout}>Logout</button>
    </header>
    <main>
      <div className="profileDetailsHeader">
      <p className="profileDetailsText">Personal Details</p>
      <p className="changePersonalDetails" onClick={()=>{
        changeDetails && onSubmit()
        setChangeDetails((prevState)=> !prevState)
      }}>
        {changeDetails ? 'done' : 'change'}
      </p>
      </div>
      <div className="profileCard">
        <form action="">
          <input 
            type="text" 
            id='name' 
            className={!changeDetails ? 'profileName' : 'profileNameActive'}
            disabled={!changeDetails}
            value={name} 
            onChange={onChange}
          />      
          <input 
            type="email" 
            id='email' 
            className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
            disabled={!changeDetails}
            value={email} 
          />    
        </form>
      </div>

    </main>
    </div>

}

export default Profile