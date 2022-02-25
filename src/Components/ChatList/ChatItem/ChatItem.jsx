import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../ChatList.module.css";
import DeleteButton from "./DeleteButton";

const ChatItem = ({chat, onDeleteChat}) => {
    return (
        <div className={s.chatItem}>
            <NavLink
                style={({ isActive }) => ({ color: isActive ? "#44d712" : "white" })}
                className={s.navChat}
                to={`/chats/${chat.id}`}>
                {chat.name}
            </NavLink>
            <DeleteButton id={chat.id} onClick={onDeleteChat}/>


        </div>
    );
};

export default ChatItem;