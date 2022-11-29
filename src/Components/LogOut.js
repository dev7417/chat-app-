import React from 'react'
import { auth } from '../Firebase/Firebase'

const style = {
    button:`bg-gray-200 px-4 py-2 hover:bg-gray-100`
}
export default function LogOut() {

    const handleLogOut = () =>{
      auth.signOut();
    }
  return (
  <button onClick={handleLogOut} className={style.button}>logout</button>
  )
}
