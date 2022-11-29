import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { db } from '../Firebase/Firebase'
import { useState, useEffect, useRef } from 'react'
import Message from './Message'
import SendMessages from './SendMessages'

const style = {
    main: `flex flex-col p-[10px] relative`
}
export default function Chat() {
    const [messages, setMessages] = useState([])
    console.log(messages)
    const scroll = useRef(null)
    useEffect(() => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let datamessages = [];
            querySnapshot.forEach((doc) => {
                datamessages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(datamessages)
            console.log(datamessages)

        })
        return () => unsubscribe()
    }, [])
    return (
        <>
            <main className={style.main}>
                {/* chat message component */}
                {messages && messages.map((message) => {
                    return (
                        <Message key={message.id} message={message} />
                    )
                })}
            </main>
            {/* second message component */}
            <SendMessages scroll={scroll}/>
            <span ref={scroll}>

            </span>


        </>
    )
}
