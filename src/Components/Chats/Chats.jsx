import React from 'react';
import s from './chats.module.css'

const Chats = ({chats}) => {
    return (
        <ul className={s.chats}>
            {chats.map((chat) => (
                <li key={chat.id}>{chat.name}</li>
            ))}
        </ul>
    );
};

export default Chats;