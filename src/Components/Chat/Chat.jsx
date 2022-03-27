import s from './chat.module.css'
import Form  from "../Form/Form";
import React, {useState, useEffect, useRef} from "react";
import {AUTHORS} from "../../UTILS/constants";
import MessageList from "../MessageList/MessageList";
import {useParams, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "../../store/messenges/selectors";
import {addMessage, addMessageWithThunk} from "../../store/messenges/actions";
import {getMessageListRefByChatId, getMessageRefById, getMessagesRefByChatId} from "../../servises/firebase";
import {onChildAdded, onValue, push, set} from "@firebase/database";
import {onChildRemoved} from "@firebase/database";

function Chat() {
    const params = useParams();
    const { chatId } = params;

    // const messages = useSelector(selectMessages);
    const [messages, setMessages] = useState([]);
    const dispatch = useDispatch();

    const messagesEnd = useRef();
    const sendMessage = (text, author) => {
        const newMsg = {
            text,
            author,
            id: `msg-${Date.now()}`,
        };
        // dispatch(addMessageWithThunk(chatId, newMsg));
        set(getMessageRefById(chatId, newMsg.id), newMsg);
    };

    const handleAddMessage = (text) => {
        // приходит text, присваиваем себя как автора
        sendMessage(text, AUTHORS.ME)
    };
    useEffect(() => {
        const unsubscribe = onValue(getMessagesRefByChatId(chatId),
            (snapshot) => {
            if(!snapshot.val()?.empty){
                setMessages(null)
            }
        })
        return unsubscribe;
    }, [chatId])

    useEffect(() => {
        const unsubscribeChat = onChildAdded(
            getMessageListRefByChatId(chatId),
            (snapshot) => {
                setMessages((prevMessages) => [...prevMessages, snapshot.val()])
            snapshot.val()
        });

        return unsubscribeChat;
    }, [chatId]);

    useEffect(() => {
        const unsubscribe = onChildRemoved(
            getMessageListRefByChatId(chatId),
            (snapshot) => {
                setMessages((prevMessages) =>
                    prevMessages.filter(({id}) => id !== snapshot.val()?.id)
                );
            }
            );

        return unsubscribe;
    }, [chatId]);




    useEffect(() => {        messagesEnd.current?.scrollIntoView();
        }, [messages]);

    if (!messages) {
        return <Navigate to='/chats' replace />
    }


    return (
        <div className={s.chat} >
            <div className="s.messageBlockChat">
                <MessageList
                    messages={messages}/>
                <div ref={messagesEnd} />
            </div>
            <Form onSubmit={handleAddMessage}/>
        </div>
    );
}

export default Chat;




