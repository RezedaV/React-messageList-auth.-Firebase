import React, {useCallback} from 'react';

const DeleteButton = ({id, onClick}) => {
    const handleClick = useCallback(() => {
        onClick(id)
    }, [onClick, id])

    return (
        <button
            onClick={handleClick}
        >
            X
        </button>
    );
};

export default DeleteButton;