import { addDoc, serverTimestamp,collection } from 'firebase/firestore';
import React, { useState } from 'react'
import { auth, db } from '../Firebase/Firebase';
const style = {
    form: `h-14 w-full max-w-[728px] flex  text-xl absolute bottom-0`,
    input: `w-full text-xl flex-row-reverse p-3 bg-gray-900 text-white outline-none border-none`,
    button: `bg-green-600 text-white w-[20%]`
}

export default function SendMessages({scroll}) {
    console.log(scroll)
    const [input, setInput] = useState();
    console.log(input)
    const sendMessage = async(e) =>{
        e.preventDefault()
        if(input === ''){
            alert("Please Enter a Message!!")
            return
        }
        const {uid, displayName} = auth.currentUser;
        await addDoc(collection(db, 'messages'),{
            text:input,
            name:displayName,
            uid,
            timestamp:serverTimestamp()
        })
        setInput('')
        scroll.current.scrollIntoView({behavior: 'smooth', block:'start'})
    }
    return (
        <form className={style.form} onSubmit={sendMessage}>
            <input className={style.input} value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Message' />
            <button className={style.button} type='submit'>Send</button>
        </form>
    )
}
