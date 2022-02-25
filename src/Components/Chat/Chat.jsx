import s from './chat.module.css'
import Form  from "../Form/Form";
import React, {useState, useEffect, useRef} from "react";
import {AUTHORS} from "../../UTILS/constants";
import MessageList from "../MessageList/MessageList";
import {useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../store/messenges/selectors";
import {addMessage, addMessageWithThunk} from "../../store/messenges/actions";


function Chat() {
    const params = useParams();
    const { chatId } = params;

    const messages = useSelector(selectMessages);
    const dispatch = useDispatch();

    //сделано чтобы при наполнении сообщениями, были видны сообщения которые отправлены только что,
    //короче чтобы моталось вниз messagesEnd
    const messagesEnd = useRef();

    const sendMessage = (text, author) => {
        const newMsg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        };
        dispatch(addMessageWithThunk(chatId, newMsg));
    };

    const handleAddMessage = (text) => {
        // приходит text, присваиваем себя как автора
        sendMessage(text, AUTHORS.ME)
    };


    useEffect(() => {
        messagesEnd.current?.scrollIntoView();
        }, [messages]);

    if (!messages[chatId]) {
        return <Navigate to='/chats' replace />
    }


    return (
        <div className={s.chat} >
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


