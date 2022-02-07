import React from 'react';
import s from './ChatList.module.css'
import {Link, Outlet} from "react-router-dom";

const ChatList = () => {
const chats = [
    { name: "Чат 1", id: "chat1" },
    { name: "Чат 2", id: "chat2" },
    { name: "Чат 3", id: "chat3" },
];


    return (
        <>
            <ul className={s.chats}>
                {chats.map(chat => (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.id}`}>{chat.name} </Link>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>

    );
};

export default ChatList;