import React from 'react';
import s from './ChatList.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";

const ChatList = ({chat, remove, removeChat}) => {
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
                        <NavLink
                            remove={removeChat}
                            style={({ isActive }) => ({ color: isActive ? "pink" : "grey" })}
                            to={`/chats/${chat.id}`}>
                            {chat.name}
                        </NavLink>
                        <button onClick={() => remove(chats)}>удалить чат</button>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>

    );
};

export default ChatList;