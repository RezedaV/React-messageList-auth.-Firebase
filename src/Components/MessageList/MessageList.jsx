import React from 'react';
import Message from "../Message/Message";
import s from './MessageList.module.css'

const MessageList = ({messages, text, author}) => {
    return messages.map( (message) => (
        <div  key = {message.id}  className={s.messageList}>
            <Message
                text={message.text}
                author = {message.author}
            />
        </div>
    ));
};

export default MessageList;