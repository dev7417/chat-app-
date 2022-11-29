import React from 'react'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'
import { auth } from '../Firebase/Firebase'


const style = {
    wrapper:`flex justify-center`
}


export default function SignIn() {
    const googleLogIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    
    }
  return (
    <div className={style.wrapper}><GoogleButton onClick={googleLogIn}/></div>
  )
}
