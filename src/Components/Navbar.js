import React, { useEffect, useState } from 'react'
import { auth } from '../Firebase/Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import SignIn from './SignIn'
import { onAuthStateChanged } from 'firebase/auth'
import LogOut from './LogOut'
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

export default function Navbar() {
    // const [mainUser, setUser] = useState()
    // console.log(mainUser)
    const [user] = useAuthState(auth)
    // setUser(user)
    // setLoggedIn(user)
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user)
    //         } else {
    //             console.log("user not found")
    //         }
    //     })
    // }, [])

    return (
        <div className={style.nav}>
            <h1 className={style.heading}>Chat App</h1>
            {
              
                (user)?<LogOut />:<SignIn />
               
            }
        </div>
    )
}
