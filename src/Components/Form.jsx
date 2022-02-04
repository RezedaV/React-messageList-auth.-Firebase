import React from 'react';
import {useState} from "react";


const Form = ({onSubmit}) => {
    const [value, setValue] = useState({text:''});

    const handleChange = (e) => {
        setValue({...value, text: e.target.value});

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue({text: ''})
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value.text}
                onChange={handleChange}
                type="text"
                placeholder='Введите сообщение'
            />
            <input type="submit"/>
        </form>
    );
};

export default Form;