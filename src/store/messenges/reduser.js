import {ADD_MESSAGES} from "./actions";
import {chatsReducer} from "../chats/reduser";

const initialState = chatsReducer.reduce((acc, el) =>{
    acc[el.id] = [];
    return acc;
}, {})

export const messagesReducer = (state = initialState, action) => {
    switch (action.type){
        case  ADD_MESSAGES:
            return [...state, {id:action.payload.id, newMsg: action.payload.name}]
        default:
            return state
    }
}
