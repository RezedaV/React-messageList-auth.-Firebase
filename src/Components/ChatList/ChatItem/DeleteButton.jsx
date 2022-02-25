import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {deleteChat} from "../../../store/chats/actions";
import s from "../ChatList.module.css";

const DeleteButton = ({id}) => {
    const dispatch = useDispatch();
    const handleDeleteChat = () => {
        dispatch(deleteChat(id));
    };
    return (
        <div className={s.deleteButton} onClick={handleDeleteChat}>X</div>
    );
};

export default DeleteButton;