import React from 'react';

const Message = ({text, onMessageClick, author}) => {
    return (
        <div>
            <h1 onClick={onMessageClick}> Сообщение: {text}</h1>
            <h1 onClick={onMessageClick}> Автор: {author}</h1>
        </div>
    );
};

export default Message;