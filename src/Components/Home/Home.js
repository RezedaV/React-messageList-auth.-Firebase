import React, {useState} from 'react';
import s from './Home.module.css'
import { Link } from "react-router-dom";
import {logIn, signUp} from "../../servises/firebase";

const Home = ({isSignUp}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    const handleSignUp = async() => {
        try {
            await signUp(email, pass);
        }catch (e){
            setError(e.message)
        }

    }

    const handleSignIn = async () => {
        try {
            await logIn(email, pass);
        }catch (e){
            setError(e.message)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            handleSignUp();
        }else {
            handleSignIn();
        }

        setEmail('');
        setPass('');
    }

    return (
        <>
            <div className={s.home}>
                <h2  className={s.name}>{isSignUp ? 'Зарегистрироваться' : 'Войти'}</h2>

                <Link
                    className={s.link}
                    to={`${isSignUp ? '/' : '/signup'}`}
                >
                    {!isSignUp ? 'Зарегистрироваться' : 'Войти'}
                </Link>
                <form className={s.form} onSubmit={handleSubmit}>
                    <input className={s.input} type='text' value={email} onChange={handleChangeEmail}/>
                    <input className={s.input} type='password' value={pass} onChange={handleChangePass}/>
                    <button className={s.myBtn}>LOGIN</button>
                    {error && <span>{error}</span>}
                </form>
            </div>
        </>

    );
};

export default Home;
