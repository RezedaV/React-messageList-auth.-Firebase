import React from 'react';
import {BrowserRouter, Link, Route, Routes, NavLink} from "react-router-dom";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";

const Home = () => <h2>Будущая страница профиля</h2>


const Router = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink
                    to="/"
                    style={({ isActive }) => ({ color: isActive ? "pink" : "grey" })}
                >
                    Home
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/chats"
                    style={({ isActive }) => ({ color: isActive ? "pink" : "grey" })}
                >
                    Chats
                </NavLink>
            </div>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='chats' element={<ChatList/>}>
                    <Route path=':chatId' element={<Chat/>}/>
                </Route>
                <Route path='*' element={<h2>404</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;