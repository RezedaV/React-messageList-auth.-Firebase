import s from './chat.module.css'
import Form  from "../Form/Form";
import React, {useState, useEffect, useRef} from "react";
import {AUTHORS} from "../../UTILS/constants";

import MessageList from "../MessageList/MessageList";
import ChatList from "../ChatList/ChatList";
import {useParams, useNavigate, Navigate} from "react-router-dom";


function Chat() {
    const params = useParams();
    const { chatId } = params;
    const navigate = useNavigate();


    const [messageList, setMessageList] = useState({
            chat1:[{text:'Привет! Как дела?', author: AUTHORS.ME, id:1}],
            chat2:[{text:'Это бот,и это чат 2', author: AUTHORS.BOT, id: 2}],
            chat3:[{text: 'А это чат 3', author: AUTHORS.ME}],
        })
    //сделано чтобы при наполнении сообщениями, были видны сообщения которые отправлены только что,
    //короче чтобы моталось вниз messagesEnd
    const messagesEnd = useRef();

    const sendMessage = (text, author) => {
        const newMesg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        };
        setMessageList((prevMessageList) => ({
            ...prevMessageList,
            [chatId]: [...prevMessageList[chatId], newMesg],
        }));
    };

    const handleAddMessage = (text) => {
        // приходит text, присваиваем себя как автора
        sendMessage(text, AUTHORS.ME)
    };


    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
        if ( messageList[chatId][messageList[chatId].length-1]?.author === AUTHORS.ME) {
            sendMessage('Робот пишет', AUTHORS.BOT)
        }
    }, [messageList]);

    if (!messageList[chatId]) {
        return <Navigate to='/chats' replace />
    }
    const removeChat = (chat) => {
        setMessageList(messageList[chatId].filter(m => m.id !== chat.id))

    }



    return (
        <div className="s.chat" >
            <ChatList remove={removeChat}/>
            <div className="s.messageBlockChat">
                <MessageList
                    messages={messageList[chatId]}/>
                <div ref={messagesEnd} />
            </div>
            <Form onSubmit={handleAddMessage}/>
        </div>
    );
}

export default Chat;


