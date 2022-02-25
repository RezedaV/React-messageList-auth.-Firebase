import React, {useEffect, useRef, useState} from 'react';
import s from './ChatList.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import Form from "../Form/Form";
import ChatItem from "./ChatItem/ChatItem";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {selectChats} from "../../store/chats/selectors";
import {addChat} from "../../store/chats/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {changeShowName} from "../../store/profile/actions";

const ChatList = () => {

    const chats = useSelector(selectChats);
    const dispatch = useDispatch();

    const handleAddChat = (newChatName) => {
        const newId = `chat-${Date.now()}`;
        dispatch(addChat(newId, newChatName));
    };



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