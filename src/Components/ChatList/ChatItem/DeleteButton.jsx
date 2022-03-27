import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {deleteChat} from "../../../store/chats/actions";
import s from "../ChatList.module.css";
import {getChatsRefById} from "../../../servises/firebase";
import { set, remove } from "@firebase/database";

const DeleteButton = ({id}) => {
    const dispatch = useDispatch();
    const handleDeleteChat = () => {
        // dispatch(deleteChat(id));
        // set(getChatsRefById(id), null);
        remove(getChatsRefById(id))
    };
    return (
        <div className={s.deleteButton} onClick={handleDeleteChat}>X</div>
    );
};

export default DeleteButton;