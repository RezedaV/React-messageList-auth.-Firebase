import s from './chat.module.css'
import Form  from "../Form/Form";
import React, {useState, useEffect, useRef} from "react";
import {AUTHORS} from "../../UTILS/constants";
import MessageList from "../MessageList/MessageList";
import ChatList from "../ChatList/ChatList";
import {useParams, useNavigate, Navigate} from "react-router-dom";


function Chat({messages, addMessage}) {
    const params = useParams();
    const { chatId } = params;
    const navigate = useNavigate();

    //сделано чтобы при наполнении сообщениями, были видны сообщения которые отправлены только что,
    //короче чтобы моталось вниз messagesEnd
    const messagesEnd = useRef();

    const sendMessage = (text, author) => {
        const newMsg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        };
        addMessage(chatId, newMsg);
    };

    const handleAddMessage = (text) => {
        // приходит text, присваиваем себя как автора
        sendMessage(text, AUTHORS.ME)
    };


    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
        if ( messages[chatId][messages[chatId].length-1]?.author === AUTHORS.ME) {
            sendMessage('Робот пишет', AUTHORS.BOT)
        }
    }, [messages]);

    if (!messages[chatId]) {
        return <Navigate to='/chats' replace />
    }


    return (
        <div className={s.chat} >
            {/*<ChatList/>*/}
            <div className="s.messageBlockChat">
                <MessageList
                    messages={messages[chatId]}/>
                <div ref={messagesEnd} />
            </div>
            <Form onSubmit={handleAddMessage}/>
        </div>
    );
}

export default Chat;


