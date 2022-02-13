export  const ADD_MESSAGES = 'MESSAGES::ADD_MESSAGES';


export const addMessages = (id, newMsg) => ({
    type: ADD_MESSAGES,
    payload: {
        id,
        newMsg,
    },
})