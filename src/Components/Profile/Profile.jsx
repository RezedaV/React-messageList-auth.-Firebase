import React from 'react';
import Avatar from '@mui/material/Avatar';
import s from './profile.module.css'

const Profile = () => {
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
            </div>

        </div>
    );
};

export default Profile;