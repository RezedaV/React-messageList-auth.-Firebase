import React from 'react';
import Message from "../Message/Message";
import s from './MessageList.module.css'
import {useParams} from "react-router-dom";
import {deleteMessage, editMessage} from "../../store/messenges/actions";
import {useDispatch} from "react-redux";
import {getMessageRefById} from "../../servises/firebase";
import {remove} from "@firebase/database";


const MessageList = ({messages, text, author}) => {
    const {chatId} = useParams();
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        // dispatch(deleteMessage(chatId, id))
        remove(getMessageRefById(chatId, id))
    }

    const handleEdit = (id) => {
        dispatch(editMessage(chatId, id, 'изменено.'))
    }

    return messages.map( (message) => (
        <div  key = {message.id}  className={s.messageList}>
            <Message
                text={message.text}
                author = {message.author}
            />
            <button onClick={() => handleDelete(message.id)}>Удалить</button>
            <button onClick={() => handleEdit(message.id)}>Редактировать</button>
        </div>
    ));
};

export default MessageList;