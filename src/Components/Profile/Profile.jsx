import React, {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import s from './profile.module.css'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import {changeName, changeShowName} from "../../store/profile/actions";
import {selectName, selectShowName} from "../../store/profile/selectors";
import {getProfileNameRef, logOut, profileNameRef, profileRef, profileShowNameRef, auth} from "../../servises/firebase";
import Form from "../Form/Form";
import { onValue, set } from "@firebase/database";


const Profile = () => {
    const dispatch = useDispatch()
    // const data = useSelector((state) => state)
    // shallowEqual отвечает за сравнение предыдущего значения и текущего значения, чтобы понять менять или нет

    // const showName = useSelector(selectShowName, shallowEqual);

    const [name, setName] = useState('');
    const [showName, setShowName] = useState(true);
    const name2 = useSelector(selectName);


    const handleChangeShowName = () => {
        // dispatch(changeShowName)
        set(profileShowNameRef(auth.currentUser.uid), !showName)
    }

    const handleChangeName = (text) => {
        // dispatch(changeName(text));
        set(profileShowNameRef(auth.currentUser.uid), text)
    };
    useEffect(() => {
        const unsubscribeName = onValue(profileNameRef, (snapshot) => {
            setName(snapshot.val())
        });
        const unsubscribeShowName =onValue(profileShowNameRef, (snapshot) => {
            setName(snapshot.val())
        });
        return () => {
            unsubscribeName();
            unsubscribeShowName();
        }
    },[] );

    const handleLogOut = async () => {
        try {
            await logOut();
        }catch (e){
            console.warn(e);
        }
    }


    return (
        <div className={s.profileBlock}>
            <div className={s.profileAva}>
                <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} src="https://c.wallhere.com/photos/2e/8e/dog_animals_Jack_Russell_Terrier-148696.jpg!d" />
                <h1>Бублик</h1>
                <button
                    onClick={handleLogOut}
                    className={s.myBtn}
                >
                    LOGOUT
                </button>
            </div>
            <div className={s.profileStatus}>
                <h3>
                    О себе: Всем привет! Я пес Бублик
                </h3>
                <div style={{margin:'50px'}}>
                    <input onClick={handleChangeShowName} type="checkbox"/>
                    <h4>Нажми на чекбокс</h4>
                    {showName && <span>{name}</span>}
                </div>
                <Form onSubmit={handleChangeName} />


            </div>

        </div>
    );
};

export default Profile;


