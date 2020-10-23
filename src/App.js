import React, { useState, useEffect } from 'react'
import { mainUser, contactsMessages, Message } from './generateFakeData'
import Avatar from './components/Avatar'
import ContactBox from './components/ContactBox'
import MessagesBox from './components/MessagesBox'
import ChatInputBox from './components/ChatInputBox'
import './App.css'
import Search from './components/Search'
// import Welcome from './components/Welcome'

function App() {
    const [data, setData] = useState(contactsMessages)
    const [contactSelected, setContactSelected] = useState({})
    const [currentMessages, setCurrentMessages] = useState([])
    const [message, setMessage] = useState('')
    const [search, setSearch] = useState('')
    const [filteredContacts, setFilterContacts] = useState([])

    useEffect(() => {
        const currContact = data.find(d => d.contact.id === contactSelected.id)
        // const currContact = data.find(d => d.contact.name === "Carles Martínez")
        setCurrentMessages(currContact && currContact.messages || [])
        filterContacts(data, search)
    }, [contactSelected, data, search])

    function pushMessage(){
        const index=data.findIndex((d) => d.contact.id === contactSelected.id)
        // const index=data.findIndex((d) => d.contact.id === contactSelected.id)
        const newData = Object.assign([], data, {
            [index]:{
                contact: contactSelected,
                messages: [...data[index].messages, new Message(true, message, new Date())],
            },
        })
        setData(newData)
        setMessage('')
    }

    function handleSearch(input){
        setSearch(input)
        filterContacts(data, input)
    }

    function filterContacts(data, search){
        const result = data.filter(({contact}) => {
            return !search || contact.name.toLowerCase().includes(search.toLowerCase())
        })
        setFilterContacts(result)
    }

    return (
        <div className="app">
            <aside>
                <header>
                    {/* <div className="avatar-component">
                        <img
                            className="avatar"
                            src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                            alt=""
                        />
                    </div> */}
                    <Avatar user={mainUser} showName={true} />
                </header>
                <Search 
                search={search} 
                handleSearch={handleSearch}/>
                <div className="contact-boxes">
                    {filteredContacts.map(({ contact, messages }) => (
                        <ContactBox 
                        contact={contact} 
                        key={contact.id} 
                        setContactSelected={setContactSelected}
                        messages={messages} />
                    ))}
                    {/* <div className="contact-box">
                        <div className="avatar-component">
                            <img
                                className="avatar"
                                src="https://pbs.twimg.com/profile_images/501759258665299968/3799Ffxy.jpeg"
                                alt=""
                            />
                        </div>

                        <div className="right-section">
                            <div className="contact-box-header">
                                <h3 className="avatar-title">Jessica Instituto</h3>
                                <span className="time-mark">yesterday</span>
                            </div>
                            <div className="last-msg">
                                <img src={doubleCheck} alt="" className="icon-small" />
                                <span className="text">Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </aside>
            {/* {contactSelected.id ? (
                <main>
                <header>
                    <Avatar user={contactSelected} showName />
                </header>
                <MessagesBox messages={currentMessages} />
                <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage}/>
            </main>
            ): <Welcome/>} */}
            <main>
                <header>
                    <Avatar user={contactSelected} showName />
                    {/* <div className="avatar-component">
                        <img
                            className="avatar"
                            src={carles}
                            alt=""
                        />

                        <h3 className="avatar-title">Carles Martínez</h3>
                    </div> */}
                </header>
                <MessagesBox messages={currentMessages} />
                <ChatInputBox message={message} setMessage={setMessage} pushMessage={pushMessage}/>
            </main>
        </div>
    )
}

export default App
