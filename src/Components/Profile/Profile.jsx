import React from 'react';
import Avatar from '@mui/material/Avatar';
import s from './profile.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeShowName} from "../../store/profile/actions";


const Profile = () => {
    const dispatch = useDispatch()
    const data = useSelector((state) => state)
    console.log (data)

    const handleChangeShowName = () => {
        dispatch(changeShowName)
    }

    return (
        <div className={s.profileBlock}>
            <div className={s.profileAva}>
                <Avatar alt="Remy Sharp" sx={{ width: 100, height: 100 }} src="https://c.wallhere.com/photos/2e/8e/dog_animals_Jack_Russell_Terrier-148696.jpg!d" />
                <h1>Бублик</h1>
            </div>
            <div className={s.profileStatus}>
                <h3>
                    О себе: Всем привет! Я пес Бублик
                </h3>
                <div style={{margin:'50px'}}>
                    <input onClick={handleChangeShowName} type="checkbox"/>
                    <h4>Нажми на чекбокс</h4>
                    {data.showName && <span>{data.name}</span>}
                </div>
            </div>

        </div>
    );
};

export default Profile;