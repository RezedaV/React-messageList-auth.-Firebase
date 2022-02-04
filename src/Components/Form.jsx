import React from 'react';
import {useState} from "react";


const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder='Введите сообщение'
            />
            <input type="submit"/>
        </form>
    );
};

export default Form;