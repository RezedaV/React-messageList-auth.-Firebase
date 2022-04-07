import {AUTHORS} from "../../UTILS/constants";

export  const ADD_MESSAGE = 'MESSAGE::ADD_MESSAGE';
export  const DELETE_MESSAGE = 'MESSAGE::DELETE_MESSAGE';
export  const EDIT_MESSAGE = 'MESSAGE::EDIT_MESSAGE';

export const addMessage = (chatId, newMsg) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        newMsg,
    },
});

export const deleteMessage = (chatId, idToDelete) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        idToDelete,
    },
});

export const editMessage = (chatId, idToEdit, newText) => ({
    type: EDIT_MESSAGE,
    payload: {
        chatId,
        idToEdit,
        newText,
    },
});

let timeOut;
export const addMessageWithThunk = (chatId, newMsg) => (dispatch) => {
    dispatch(addMessage(chatId, newMsg));
    if (newMsg.author !== AUTHORS.BOT){
        clearTimeout(timeOut);
        timeOut = setTimeout(()=> {
            const msgBot = {
                text:'ehyyy from bot',
                author: AUTHORS.BOT,
                id: `msg-${Date.now()}`,
            };
            dispatch(addMessage(chatId, msgBot))

        }, 1000)
    }


}