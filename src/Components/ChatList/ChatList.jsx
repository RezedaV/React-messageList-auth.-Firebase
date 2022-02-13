import React, {useEffect, useRef, useState} from 'react';
import s from './ChatList.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import Form from "../Form/Form";
import ChatItem from "./ChatItem/ChatItem";

const ChatList = ({chats, onAddChat, onDeleteChat }) => {

    return (
        <div className={s.chatBlock}>
            <ul className={s.chats}>
                {chats.map(chat => (
                    <li key={chat.id}>
                        <ChatItem
                            chat={chat}
                            onDeleteChat={onDeleteChat}
                        />
                    </li>
                ))}
            </ul>
            <Form onSubmit={onAddChat}/>
            <Outlet />
        </div>

    );
};

export default ChatList;