import React, { useRef, useEffect } from 'react'
import Message from './Message';

export default function MessagesBox({ messages }) {
    const endDiv = useRef(null)
    useEffect(() => {
        endDiv.current.scrollIntoView()
    })

    return (
        <div className="chats">
            {messages.sort((a,b) => a.date.getTime() - b.date.getTime())
            .map((m) => (
                <Message message={m} key={m.id} />
            ))}
            <div style={{float:'right', clear:'both'}} ref={endDiv}></div>
            {/* <div className="message received">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur voluptatibus fuga illo.
            <div className="metadata">
                <span className="date">05/20/2020</span>
            </div> 
        </div>*/}

        </div>
    )
}

