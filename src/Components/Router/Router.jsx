import React, {useState} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Link, Route, Routes, NavLink} from "react-router-dom";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import Profile from "../Profile/Profile";
import s from './router.module.css'
import {addChat, deleteChat} from "../../store/chats/actions";
import {selectChats} from "../../store/chats/selectors";
import {selectMessages} from "../../store/messenges/selectors";
import {addMessage} from "../../store/messenges/actions";


const Home = () => <h2>Home page</h2>

const Router = () => {

    return (
        <BrowserRouter>
            <div className={s.routerNav}>
                <div>
                    <NavLink
                        to="/"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Profile page
                    </NavLink>
                </div>
                <div>
                    <NavLink
                        to="/chats"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Chats
                    </NavLink>
                </div>
            </div>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='chats' element={<ChatList/>}>
                    <Route path=':chatId' element={<Chat/>}/>
                </Route>
                <Route path='*' element={<h2>404</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;



