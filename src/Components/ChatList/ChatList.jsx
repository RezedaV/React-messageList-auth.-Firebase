import React, {useEffect, useRef, useState} from 'react';
import s from './ChatList.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import Form from "../Form/Form";
import ChatItem from "./ChatItem/ChatItem";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {addChat, initChatsTracking} from "../../store/chats/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {changeShowName} from "../../store/profile/actions";
import {chatsRef, getChatsRefById, getMessagesRefByChatId} from "../../servises/firebase";
import { onValue, set, onChildAdded, onChildRemoved } from "@firebase/database";


const ChatList = () => {

    const chats = useSelector(selectChats);
    // const [chats, setChats] = useState([]);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        // dispatch(addChat(newId, newChatName));
        set(getChatsRefById(newId), {id:newId, name:newChatName})
        set(getMessagesRefByChatId(newId), {empty: true});
    };
    
    // useEffect(() => {
    //     const unsubscribe = onValue(chatsRef, (snapshot) => {
    //         const newChats = [];
    //         snapshot.forEach((child) => {
    //             newChats.push(child.val());
    //         });
    //
    //         setChats(newChats);
    //
    //     } );
    //     return unsubscribe;
    // }, [])


    // useEffect(() => {
    //     const unsubscribe = onChildAdded(chatsRef, (snapshot) => {
    //         setChats((prevChats) => [...prevChats, snapshot.val()]);
    //     } );
    //     return unsubscribe;
    // }, [])
    //
    // useEffect(() => {
    //     const unsubscribe = onChildRemoved(chatsRef, (snapshot) => {
    //         setChats((prevChats) =>
    //             prevChats.filter(({id}) => id !== snapshot.val()?.id)
    //         );
    //     });
    //     return unsubscribe;
    // }, [])

    useEffect(() => {
        dispatch(initChatsTracking())
    }, []);





    return (
        <div className={s.chatBlock}>
            <div>
                <ul className={s.chats}>
                    {chats.map(chat => (
                        <li key={chat.id}>
                            <ChatItem
                                chat={chat}
                            />
                        </li>
                    ))}
                </ul>
                <Form onSubmit={handleAddChat} />


            </div>
            <Outlet />
        </div>

    );
};

export default ChatList;