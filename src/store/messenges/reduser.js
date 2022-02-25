import {ADD_MESSAGE, DELETE_MESSAGE, EDIT_MESSAGE} from "./actions";
import {chatsReducer} from "../chats/reduser";
import {ADD_CHAT, DELETE_CHAT} from "../chats/actions";

const initialState = {};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case  ADD_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: [
                    ...state[action.payload.chatId],
                    action.payload.newMsg,
                ],
            };
        }
        case DELETE_MESSAGE: {
            return {
                ...state,
                [action.payload.chatId]: state[action.payload.chatId].filter(
                    (message) => message.id !== action.payload.idToDelete
                ),
            };
        }
        case EDIT_MESSAGE: {
            const {chatId, idToEdit, newText} = action.payload;
            const editIndex = state[chatId].findIndex(
                (message) => message.id === idToEdit
            )
            const newState = {...state};
            newState[chatId][editIndex]={
                ...newState[chatId][editIndex],
                text: newText
            }
            return newState;
        }
        case  ADD_CHAT:{
            return {
                ...state,
                [action.payload.id]:[],
            };
        }
        case  DELETE_CHAT:{
            const newMsg = {...state};
            delete newMsg[action.payload];
            return newMsg;
        }
        default:
            return state

    }
}
