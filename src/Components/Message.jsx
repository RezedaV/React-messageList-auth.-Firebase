import React from 'react';

const Message = ({text, onMessageClick}) => {
    return (
        <div>
           <h1 onClick={onMessageClick}> Сообщение: {text}</h1>
        </div>
    );
};

export default Message;