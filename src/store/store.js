import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {profileReducer} from "./profile/reduser";
import {chatsReducer} from "./chats/reduser";
import {messagesReducer} from "./messenges/reduser";
import {articlesReducer} from "./articles/reduser";
import {photosReducer} from "./photos/reduser";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages:messagesReducer,
    articles: articlesReducer,
    photos:photosReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'gbMessenger',
    storage,
    blacklist: ['profile']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export  const persistor = persistStore(store);
