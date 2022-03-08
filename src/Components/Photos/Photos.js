import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectError} from "../../store/photos/selectors";
import {selectPhotos, selectPhotosLoading} from "../../store/photos/selectors";
import {getPhotos} from "../../store/photos/actions";
import {CircularProgress} from "@mui/material";

const Photos = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectError);
    const isLoading = useSelector(selectPhotosLoading);
    const photos = useSelector(selectPhotos);

    const getData = async () => {
        dispatch(getPhotos());
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <h3>Фотографии</h3>
            <button onClick={getData}>Обновить данные</button>
            {error && <h4>Ошибка{error.message}</h4>}
            {isLoading ? (
                <CircularProgress />
            ) :(
                <ul>
                    {photos.map((photo)=> (
                        <li key={photo.id}>
                            {photo.title}
                            <br/>
                            <img src={photo.thumbnailUrl} alt="1"/>

                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Photos;

