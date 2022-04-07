import React from 'react';
import PropTypes from "prop-types";
import s from './Message.module.css'

const Message = ({text, author}) => {
    return (
        <div className={s.message}>
            <h3 className={s.messageText}> {text}</h3>
            <h3 className={s.messageAuthor}> {author}</h3>
        </div>
    );
};

Message.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
    author: PropTypes.string.isRequired,
};

export default Message;


