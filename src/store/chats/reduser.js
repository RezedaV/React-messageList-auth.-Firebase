import {ADD_CHAT, DELETE_CHAT} from "./actions";

const initialState = [
    { name: "Чат 1", id: "chat1" },
    { name: "Чат 2", id: "chat2" },
    { name: "Чат 3", id: "chat3" },
];

export const chatsReducer = (state = initialState, action) => {
    switch (action.type){
        case  ADD_CHAT:
            return [...state, {name: action.payload.name, id:action.payload.id}]
        case  DELETE_CHAT:
            return state.filter(({id}) =>id !== action.payload)
        default:
            return state
    }
}
