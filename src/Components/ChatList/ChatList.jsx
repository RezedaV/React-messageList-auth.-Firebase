import React from 'react';
import s from './ChatList.module.css'
import {Link, NavLink, Outlet} from "react-router-dom";

const ChatList = ({chat, remove, removeChat}) => {
const chats = [
    { name: "Чат 1", id: "chat1" },
    { name: "Чат 2", id: "chat2" },
    { name: "Чат 3", id: "chat3" },
];

// const handleDeleteChat = (idToDelete) => {
//   const newChats = chats.filter(chat => chat.id !== idToDelete);
//   setChats(newChats);
//   const newMessageList = { ...messageList };
//   delete messageList[idToDelete];
//   setMessageList(newMessageList)
// }




    return (
        <div className={s.chatBlock}>
            <ul className={s.chats}>
                {chats.map(chat => (
                    <li key={chat.id}>
                        <NavLink
                            // remove={removeChat}
                            style={({ isActive }) => ({ color: isActive ? "#44d712" : "white" })}
                            className={s.navChat}
                            to={`/chats/${chat.id}`}>
                            {chat.name}
                        </NavLink>
                        {/*<button onClick={() => remove(chats)}>удалить чат</button>*/}
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>

    );
};

export default ChatList;