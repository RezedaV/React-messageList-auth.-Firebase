import React, {useEffect, useState} from 'react';
import {BrowserRouter, Link, Route, Routes, NavLink} from "react-router-dom";
import Chat from "../Chat/Chat";
import ChatList from "../ChatList/ChatList";
import Profile from "../Profile/Profile";
import s from './router.module.css'
import Articles from "../Articles/Articles";
import PublicRoute from "../PublicRoute/PublicRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Home from "../Home/Home";
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../../servises/firebase";

// const Home = () => <h2>Home page</h2>

const Router = () => {
    const [authed, setAuthed] = useState(false);

    const authorize = () => {
        setAuthed(true)
    }
    const unAuthorize = () => {
        setAuthed(false)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        });
        return unsubscribe;
    }, []);

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
                <div>
                    <NavLink
                        to="/articles"
                        className={s.navLinkRout}
                        style={({ isActive }) => ({ color: isActive ? "#44d712" : "white"})}
                    >
                        Articles
                    </NavLink>
                </div>
            </div>

            <Routes>
                <Route path='' element={<PublicRoute authed={authed}/>}>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signup' element={<Home isSignUp />}/>
                </Route>
                <Route path='/profile' element={<PrivateRoute authed={authed}/>}>
                    <Route path='' element={<Profile onLogOut={unAuthorize}/>}/>
                </Route>


                <Route path='/articles' element={<Articles/>}/>
                <Route path='chats' element={<ChatList/>}>
                    <Route path=':chatId' element={<Chat/>}/>
                </Route>
                <Route path='*' element={<h2>404</h2>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;



