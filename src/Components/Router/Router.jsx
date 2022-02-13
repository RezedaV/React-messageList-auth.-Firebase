import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Link, Route, Routes, NavLink} from "react-router-dom";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import Profile from "../Profile/Profile";
import s from './router.module.css'
import {addChat, deleteChat} from "../../store/chats/actions";
import {selectChatList} from "../../store/chats/selectors";
import {selectMessages} from "../../store/messenges/selectors";
import {addMessages} from "../../store/messenges/actions";


const Home = () => <h2>Home page</h2>
//
// const initialChats = [
//     { name: "Чат 1", id: "chat1" },
//     { name: "Чат 2", id: "chat2" },
//     { name: "Чат 3", id: "chat3" },
// ];
//
// const initialMessages = initialChats.reduce((acc, el) =>{
//     acc[el.id] = [];
//     return acc;
// }, {})


const Router = () => {
    // const [chatList, setChatList] = useState(initialChats)
    // const [messages, setMessages] = useState(initialMessages)

    // const chatList = useSelector(state => state.chats)
    const chatList = useSelector(selectChatList, shallowEqual)
    const messages = useSelector(selectMessages, shallowEqual)
    const dispatch = useDispatch();

    const handleAddMessage = (chatId, newMsg) => {
        dispatch(addMessages(chatId, newMsg))
        // setMessages((prevMessageList) => ({
        //     ...prevMessageList,
        //     [chatId]: [...prevMessageList[chatId], newMsg],
        // }));
    }

    const handleAddChat = (newChatName) => {
        const newId =`chat-${Date.now()}`;
        const newChat = {
            id:newId,
            name: newChatName
        };
        dispatch(addChat(newId, newChatName))
        // setChatList((prevChatList) => [...prevChatList, newChat])
        setMessages((prevMessages) => ({
            ...prevMessages,
            [newId]: []
        }))
    }

    const handleDeleteChat = (idToDelete) => {
        dispatch(deleteChat(idToDelete))
        // setChatList(prevChatList => prevChatList.filter(chat => chat.id !== idToDelete));
        setMessages((prevMessages) => {
            const newMesgs = {...prevMessages}

            delete newMesgs[idToDelete]
            return newMesgs
        })

    }



    return (
        <BrowserRouter>
            <div className={s.routerNav}>
                <div>
                    <NavLink
                        to="/"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Profile page
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/chats"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Chats
                    </NavLink>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route
                    path='chats'
                    element={
                        <ChatList
                            chats={chatList}
                            onDeleteChat={handleDeleteChat}
                            onAddChat={handleAddChat}
                        />
                    }
                >
                    <Route
                        path=':chatId'
                        element={
                            <Chat
                                messages={messages}
                                addMessage={handleAddMessage}
                            />
                        }
                    />
                </Route>
                <Route path='*' element={<h2>404</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

