import {useEffect} from "react";
import {onChildAdded, onChildRemoved, onValue} from "@firebase/database";
import {chatsRef, getMessageListRefByChatId, getMessagesRefByChatId} from "../../servises/firebase";

export  const ADD_CHAT = 'CHATS::ADD_CHAT';
export  const DELETE_CHAT = 'CHATS::DELETE_CHAT';



export const deleteChat = (id) => ({
    type: DELETE_CHAT,
    payload: id,
})

export const addChat = (id, name) => ({
    type: ADD_CHAT,
    payload: {
        id,
        name,
    },
})

export const  initChatsTracking = () => (dispatch) => {
       onChildAdded(chatsRef, (snapshot) => {
            dispatch(addChat(snapshot.val().id, snapshot.val().name))
        });

        onChildRemoved(chatsRef, (snapshot) => {
            dispatch(deleteChat(snapshot.val().id))
        });
        // доделать для профиля и сообщений, что то такое же
}

// 1 час 44 мин

