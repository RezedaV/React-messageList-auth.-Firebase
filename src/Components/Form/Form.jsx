import React, {useRef} from 'react';
import {useState, useEffect} from "react";
import s from './Form.module.css'


const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');
    const textField = useRef();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('')
    };

    useEffect(() => {
        textField.current?.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className={s.myForm}>
            <input
                className={s.myInput}
                value={value}
                ref={textField}
                onChange={handleChange}
                type="text"
                placeholder='Введите сообщение'
            />
            <input
                className={s.myBtn}
                type="submit"/>
        </form>
    );
};

export default Form;